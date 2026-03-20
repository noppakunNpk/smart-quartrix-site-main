# ------------ Build stage ------------
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json vite.config.ts ./
COPY src ./src
COPY public ./public

# สำคัญ: copy env files เข้าไปด้วย
COPY .env* ./

# รับ build arg เพื่อเลือก mode (default = production)
ARG VITE_MODE=production
ENV VITE_MODE=${VITE_MODE}

RUN pnpm install --frozen-lockfile

# ส่ง mode เข้าไปให้ Vite ใช้ (จะไปอ่าน .env.<VITE_MODE>)
RUN pnpm exec vite build --mode ${VITE_MODE}

# ------------ Runtime (nginx) ------------
FROM nginx:1.27-alpine AS runner

# รับ arg เพื่อเลือก nginx conf ตาม env ถ้าต้องการ
ARG NGINX_ENV=prod

RUN rm /etc/nginx/conf.d/default.conf

# สมมติคุณมี nginx.conf.prod และ nginx.conf.dev
COPY nginx.${NGINX_ENV}.conf /etc/nginx/conf.d/default.conf

# static files จาก Vite
COPY --from=builder /app/dist/client /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

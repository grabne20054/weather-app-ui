# --- Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Use standalone output
ENV NODE_ENV=production
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner

WORKDIR /app

# Create a non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

# Copy only standalone output (automatically includes all required files)
COPY --chown=app:app --from=builder /app/.next/standalone ./
COPY --chown=app:app --from=builder /app/public ./public
COPY --chown=app:app --from=builder /app/.next/static ./.next/static

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]

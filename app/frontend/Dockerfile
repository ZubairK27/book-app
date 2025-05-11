# frontend/Dockerfile

FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependancies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose frontend port
EXPOSE 3000

# Start frontend
CMD ["npm", "start"]

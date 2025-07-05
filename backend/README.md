# MeeApp Backend

A Spring Boot REST API for the MeeApp social networking platform.

## Features

- JWT Authentication & Authorization
- User Management
- Event Management
- Group Management
- Real-time Messaging
- Category Management
- Role-based Access Control

## Quick Start

### Prerequisites

- Java 17 or higher
- PostgreSQL 12 or higher
- Maven 3.6 or higher

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Configure Database**
   
   Create a PostgreSQL database:
   ```sql
   CREATE DATABASE meeapp_db;
   ```

3. **Environment Variables**
   
   Create a `.env` file or set environment variables:
   ```bash
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. **Run the Application**
   ```bash
   mvn spring-boot:run
   ```

   The API will be available at `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /api/auth/signin` - User login
- `POST /api/auth/signup` - User registration

### Test Endpoints
- `GET /api/test/all` - Public access
- `GET /api/test/user` - User access (requires authentication)
- `GET /api/test/mod` - Moderator access
- `GET /api/test/admin` - Admin access

### Events
- `GET /api/events/public` - Get public events
- `POST /api/events` - Create event (authenticated)
- `PUT /api/events/{id}` - Update event
- `DELETE /api/events/{id}` - Delete event

### Groups
- `GET /api/groups/public` - Get public groups
- `POST /api/groups` - Create group (authenticated)
- `PUT /api/groups/{id}` - Update group
- `DELETE /api/groups/{id}` - Delete group

### Users
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile
- `GET /api/users/search` - Search users

## Testing

### Test User Credentials
For development, a test user is automatically created:
- **Email**: `test@example.com`
- **Password**: `testpass123`

### Using cURL

**Login:**
```bash
curl -X POST http://localhost:8080/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "testpass123"
  }'
```

**Access Protected Endpoint:**
```bash
curl -X GET http://localhost:8080/api/test/user \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Configuration

### Database Configuration
The application uses PostgreSQL by default. Update `application.yml` for different database configurations.

### JWT Configuration
- Default expiration: 24 hours
- Secret key should be at least 256 bits for HS256 algorithm

### CORS Configuration
Configured to allow requests from:
- `http://localhost:3000` (React)
- `http://localhost:8081` (React Native)
- `http://localhost:19006` (Expo)

## Development

### Database Schema
The application uses JPA/Hibernate with automatic schema generation. Initial data is loaded from `data.sql`.

### Logging
Debug logging is enabled for:
- `com.meeapp` package
- Spring Security
- Spring Web

### Health Check
Available at: `http://localhost:8080/actuator/health`

## Production Deployment

1. Set production environment variables
2. Configure production database
3. Update CORS origins for production domains
4. Use a strong JWT secret key
5. Enable HTTPS

## Security Features

- JWT-based authentication
- Password encryption using BCrypt
- Role-based authorization
- CORS protection
- Request validation
- SQL injection prevention through JPA

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error
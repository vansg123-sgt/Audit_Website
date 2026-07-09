package main

import (
	"auditflow-backend/internal/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create Gin router
	router := gin.Default()

	// Register all routes
	routes.SetupRoutes(router)

	// Start server
	router.Run(":8080")
}
package routes

import "github.com/gin-gonic/gin"

// SetupRoutes registers all routes
func SetupRoutes(router *gin.Engine) {

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"success": true,
			"message": "Welcome to AuditFlow API 🚀",
			"version": "v1",
		})
	})

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "healthy",
		})
	})
}
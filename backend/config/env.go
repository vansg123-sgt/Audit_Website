package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// LoadEnv loads variables from the .env file.
func LoadEnv() {
	err := godotenv.Load()

	if err != nil {
		log.Println("No .env file found, using system environment variables")
	}
}

// GetEnv returns the value of an environment variable.
func GetEnv(key string) string {
	return os.Getenv(key)
}
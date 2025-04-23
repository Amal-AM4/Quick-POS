package initializers

import (
	"fmt"
	"log"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"quick-pos/models" 
)

func SeedAdmin(db *gorm.DB) {
	var count int64
	if err := db.Model(&models.Administrator{}).Count(&count).Error; err != nil {
		log.Fatalf("Error checking admin count: %v", err)
	}

	if count == 0 {
		// hash the default password
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte("admin"), bcrypt.DefaultCost)

		if err != nil {
			log.Fatalf("Failed to hash password: %v", err)
		}

		admin := models.Administrator{
			UserName: "admin",
			Password: string(hashedPassword),
			Type: "admin",
		}

		if err := db.Create(&admin).Error; err != nil {
			log.Fatalf("Failed to create admin user: %v", err)
		}

		fmt.Println("Default admin user created")
	} else {
		fmt.Println("Admin user already exists. skipping seed.")
	}
}
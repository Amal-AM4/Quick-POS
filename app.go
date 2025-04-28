package main

import (
	"context"
	"fmt"
	"log"
	"quick-pos/models"
	"quick-pos/initializers"
	"quick-pos/controllers"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// App struct
type App struct {
	ctx context.Context
	DB *gorm.DB // add DB instance to App
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	// Initialize the database
	db, err := gorm.Open(sqlite.Open("sqlite/quickpos.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	// save db to App struct
	a.DB = db

	// AutoMigrate models
	err = db.AutoMigrate(
		&models.Administrator{},
		&models.StoreDetail{},
		&models.Expense{},
		&models.Customer{},
		&models.Supplier{},
		&models.Category{},
		&models.Product{},
		&models.Transaction{},
		&models.TransactionDetail{},
		&models.Payment{},
	)
	if err != nil {
		log.Fatalf("Failed to auto-migrate: %v", err)
	}

	fmt.Println("✅ Database connected and models migrated successfully!")

	// Seed dummy admin if not exists
	initializers.SeedAdmin(db)
}

// below you can define your own user defined func
// expose to frontend like backend to frontend
func (a *App) Login(username string, password string) (bool, string) {
	return controllers.Login(username, password)
}

func (a *App) Logout()  {
	controllers.Logout()
}

func (a *App) IsLoggedIn() bool {
	return controllers.IsLoggedIn()
}

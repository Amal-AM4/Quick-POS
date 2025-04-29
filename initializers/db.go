package initializers

import (
	"gorm.io/gorm"
	"gorm.io/driver/sqlite" // or postgres/mysql driver
)

var DB *gorm.DB

func ConnectDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open("sqlite/quickpos.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
}

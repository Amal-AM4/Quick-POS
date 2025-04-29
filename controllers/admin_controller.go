package controllers

import (
	"quick-pos/models"
	"quick-pos/initializers"
	"golang.org/x/crypto/bcrypt" // import bcrypt
)

var LoggedIn = false

// login checks username and password
func Login(username, password string) (bool, string) {
	var admin models.Administrator
	result := initializers.DB.Where("user_name = ?", username).First(&admin)

	if result.Error != nil {
		return false, "username not found"
	}

	// compare bcrypt hashed password with the input password
	err := bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(password))
	if err != nil {
		return false, "incorrect password"
	} 

	LoggedIn = true
	return true, "login successful!"
}

// logout user
func Logout()  {
	LoggedIn = false
}

// IsLoggedIn returns true if logged in
func IsLoggedIn() bool {
	return LoggedIn
}
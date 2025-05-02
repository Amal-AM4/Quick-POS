package controllers

import (
	"fmt"
	"quick-pos/initializers"
	"quick-pos/models"
)

func CreateStoreDetail(
	storeName string,
	ownerName string,
	addressLine string,
	place string,
	district string,
	pincode string,
	phone string,
	email string,
	gstin string,
	upiID string,
) (models.StoreDetail, error) {
	// Create the struct from individual values
	store := models.StoreDetail{
		StoreName:   storeName,
		OwnerName:   ownerName,
		AddressLine: addressLine,
		Place:       place,
		State:       &district, // pointer to string
		Pincode:     pincode,
		Phone:       phone,
		Email:       &email,    // pointer to string
		Gstin:       gstin,
		UpiID:       &upiID,    // pointer to string
	}

	// Save to DB
	if err := initializers.DB.Create(&store).Error; err != nil {
		return models.StoreDetail{}, err
	}

	return store, nil
}

func GetStoreData() (models.StoreDetail, error) {
	var store models.StoreDetail

	// fetch the first store entry ordered by ID
	if err := initializers.DB.Order("id ASC").First(&store).Error; err != nil {
		return models.StoreDetail{}, err
	}

	fmt.Printf("%v", store)

	return store, nil
}

package models

import (
	"time"
)

// Administrator schema
type Administrator struct {
	ID        uint      `gorm:"primaryKey"`
	UserName  string
	Password  string
	Type      string    `gorm:"default:'admin'"`
	CreatedAt time.Time
}

// StoreDetail schema
type StoreDetail struct {
	ID          uint      `gorm:"primaryKey"`
	StoreName   string
	OwnerName   string
	AddressLine string
	Place       string
	State       *string
	Pincode     string
	Phone       string
	Email       *string
	Gstin       string
	UpiID       *string
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

// Expense schema
type Expense struct {
	ID          uint      `gorm:"primaryKey"`
	Description string
	Amount      float64   `gorm:"type:decimal(10,2)"`
	ExpenseDate time.Time
}

// Customer schema
type Customer struct {
	ID        uint      `gorm:"primaryKey"`
	Name      string
	Email     *string
	Phone     *string
	CreatedAt time.Time
}

// Supplier schema
type Supplier struct {
	ID            uint      `gorm:"primaryKey"`
	SupplierName  string
	ContactPerson string
	Phone         string
	Email         *string
	Gstin         string
	AddressLine   string
	Place         string
	City          *string
	State         *string
	Pincode       *string
	CreatedAt     time.Time
	UpdatedAt     time.Time

	Products []Product `gorm:"foreignKey:SupplierID"`
}

// Category schema
type Category struct {
	ID        uint      `gorm:"primaryKey"`
	Name      string
	CreatedAt time.Time

	Products []Product `gorm:"foreignKey:CategoryID"`
}

// Product schema
type Product struct {
	ID            uint      `gorm:"primaryKey"`
	Barcode       string
	ImageFile     *string
	ProductName   string
	CategoryID    uint
	SupplierID    uint
	Unit          string
	PurchasePrice float64   `gorm:"type:decimal(10,2)"`
	SellingPrice  float64   `gorm:"type:decimal(10,2)"`
	Qty           uint
	ExpiryDate    time.Time
	IsAvailable   bool      `gorm:"default:true"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
}

// Transaction schema
type Transaction struct {
	ID              uint      `gorm:"primaryKey"`
	CustomerID      uint
	TotalAmt        float64   `gorm:"type:decimal(10,2)"`
	PaymentStatus   string
	PaymentMethod   string
	CreatedAt       time.Time

	TransactionDetails []TransactionDetail `gorm:"foreignKey:TransactionID"`
	Payments           []Payment           `gorm:"foreignKey:TransactionID"`
}

// TransactionDetail schema
type TransactionDetail struct {
	ID            uint      `gorm:"primaryKey"`
	TransactionID uint
	ProductID     uint
	Qty           uint
	Price         float64   `gorm:"type:decimal(10,2)"`
	SubTotal      float64   `gorm:"type:decimal(10,2)"`
	CreatedAt     time.Time
}

// Payment schema
type Payment struct {
	ID            uint      `gorm:"primaryKey"`
	TransactionID uint
	AmountPaid    float64   `gorm:"type:decimal(10,2)"`
	PaymentMethod string
	PaymentDate   time.Time
}

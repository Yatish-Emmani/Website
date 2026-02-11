const menuData = {
    "BHAJI PAV": [
        {name: "Bhaji Pav", price: 14.99},
        {name: "Honest Special Bhaji Pav", price: 15.99},
        {name: "Masala Pav mixed with Bhaji", price: 14.99},
        {name: "Masala Pav Dry", price: 11.99}
    ],

    "PULAV": [
        {name: "Pulav", price: 14.99},
        {name: "Cheese Pulav", price: 15.99},
        {name: "Honest Special Pulav", price: 15.99}
    ],

    "SIDES": [
        {name: "Extra Pav", price: 3.29},
        {name: "Spicy Garlic Chutney", price: 5.99},
        {name: "Masala Papad (Roasted / Fried)", price: 3.99},
        {name: "Roasted Papad", price: 1.99},
        {name: "Fried Papad", price: 2.49},
        {name: "Plain Yogurt", price: 5.99},
        {name: "Plain White Rice", price: 5.99},
        {name: "Extra Butter / Cheese on side", price: 3.29}
    ],

    "BHAJI PAV TRAY / PULAV TRAY": [
        {name: "Half Tray (16 to 20 People)", price: 160.00},
        {name: "Full Tray (35 to 40 People)", price: 260.00}
    ],

    "PIZZA": [
        {name: "Indian Style Bhakri Pizza", price: 11.99},
        {name: "Double Cheese Pizza", price: 12.99},
        {name: "Honest Special Pizza", price: 13.99}
    ],

    "SANDWICH": [
        {name: "Aloo Mutter", price: 8.99},
        {name: "Aloo Mutter Cheese", price: 10.99},
        {name: "Vegetable", price: 8.99},
        {name: "Vegetable Cheese", price: 10.99},
        {name: "Cheese Chutney", price: 8.99},
        {name: "Cheese Jam", price: 9.99},
        {name: "Chocolate, Pineapple Jam, Cheese", price: 14.99},
        {name: "Veg Masala Grill Sandwich", price: 12.99},
        {name: "Cheese Veg. Masala Grill Sandwich", price: 14.99},
        {name: "Honest Special Grilled", price: 14.49},
        {name: "Bahubali Sandwich", price: 17.99},
        {name: "Cheese Paneer Hungama", price: 18.99}
    ],

    "SNACKS": [
        {name: "Veg Puff (2pcs)", price: 6.99},
        {name: "Amul Butter Vada Pav (2pcs)", price: 12.99},
        {name: "Amul Cheese Vada Pav (2pcs)", price: 14.99}
    ],

    "BOMBAY CHAAT": [
        {name: "Bhel", price: 9.99},
        {name: "Pani Puri (8 Pcs)", price: 9.99},
        {name: "Sev Puri", price: 9.99},
        {name: "Chatni Puri", price: 9.99},
        {name: "Dahi Puri", price: 11.49},
        {name: "Samosa (2pcs)", price: 7.99},
        {name: "Samosa Chaat (without Chhole)", price: 10.99},
        {name: "Samosa Chaat with Chhole", price: 12.99},
        {name: "Papdi Chaat", price: 9.99}
    ],

    "INDO CHINESE": [
        {name: "Dry Veg Manchurian", price: 15.99},
        {name: "Veg Manchurian Gravy", price: 16.99},
        {name: "Ghobi Manchurian Dry", price: 14.99},
        {name: "Ghobi Manchurian Gravy", price: 15.99},
        {name: "American Chopsuey", price: 13.99},
        {name: "Dry Paneer Chilly", price: 14.99},
        {name: "Paneer Chilly Gravy", price: 15.99},
        {name: "Veg Fried Rice", price: 14.99},
        {name: "Veg Hakka Noodle", price: 14.99},
        {name: "Schezwan Noodle", price: 15.99},
        {name: "Veg Chilly Garlic Noodle", price: 15.99},
        {name: "Veg Chilly Garlic Fried Rice", price: 15.99},
        {name: "Veg Noodle with Manchurian", price: 16.99},
        {name: "Veg Fried Rice with Manchurian", price: 16.99},
        {name: "Schezwan Fried Rice", price: 15.99},
        {name: "Triple Schezwan Rice", price: 19.99},
        {name: "Chinese Bhel", price: 16.49},
        {name: "Cheese Chinese Bhel", price: 18.99}
    ],

    "SOUTH INDIAN": [
        {name: "Dosa Plain", price: 11.99},
        {name: "Masala Dosa", price: 13.99},
        {name: "Mysore Dosa", price: 13.99},
        {name: "Mysore Masala Dosa", price: 16.99},
        {name: "Schezwan Dosa", price: 18.99},
        {name: "Spring Dosa", price: 17.99},
        {name: "Dabang Dosa", price: 20.99},
        {name: "Plain Uttapam", price: 11.99},
        {name: "Masala Uttapam", price: 13.99},
        {name: "Onion Chilly Uttapam", price: 14.99},
        {name: "Tomato Chilly Uttapam", price: 14.99},
        {name: "Tomato Onion Chilly Uttapam", price: 15.99},
        {name: "Steam Idli", price: 9.99},
        {name: "Fried Idli", price: 10.99},
        {name: "Ghee Podi Idli", price: 12.99},
        {name: "Ghee Podi Masala Dosa", price: 19.99},
        {name: "Rava Plain Dosa", price: 13.99},
        {name: "Rava Masala Dosa", price: 15.99},
        {name: "Rava Onion Dosa", price: 14.49},
        {name: "Rava Onion Masala Dosa", price: 16.99},
        {name: "Rava Onion Chilly Dosa", price: 14.99},
        {name: "Rava Onion Chilly Masala Dosa", price: 16.99},
        {name: "Onion Chilly Dosa", price: 13.99},
        {name: "Onion Chilly Masala Dosa", price: 14.99},
        {name: "Chocolate Dosa", price: 12.99},
        {name: "Add Cheese", price: 3.99},
        {name: "Extra Masala For Dosa On a Side", price: 2.99}
    ],

    "STARTERS": [
        {name: "Paneer 65", price: 14.99},
        {name: "Ghobi 65", price: 14.99},
        {name: "Paneer Tikka", price: 17.99},
        {name: "Paneer Pudina Tikka", price: 18.99},
        {name: "Veg Spring Roll", price: 10.99},
        {name: "French Fries", price: 6.99},
        {name: "Cheese French Fries", price: 8.99}
    ],

    "SOUP": [
        {name: "Sweet Corn Vegetable Soup", price: 7.99},
        {name: "Hot & Sour Soup", price: 7.99},
        {name: "Veg Manchow Soup", price: 7.99},
        {name: "Tomato Soup", price: 7.99},
        {name: "Corn Tomato Cheese Soup", price: 8.99}
    ],

    "RED GRAVY": [
        {name: "Paneer Tikka Masala", price: 20.99},
        {name: "Paneer Tawa Masala", price: 20.99},
        {name: "Paneer Butter Masala", price: 20.99},
        {name: "Paneer Makhani", price: 21.49},
        {name: "Veg Makkhanwala", price: 20.49},
        {name: "Veg Kolhapuri", price: 20.49},
        {name: "Veg Jaipuri", price: 20.49},
        {name: "Cheese Butter Masala", price: 22.99}
    ],

    "BROWN GRAVY": [
        {name: "Paneer Kadai", price: 20.99},
        {name: "Paneer Bhurji", price: 21.49},
        {name: "Mutter Paneer", price: 20.99},
        {name: "Paneer Handi", price: 20.99},
        {name: "Kaju Curry", price: 21.99},
        {name: "Mushroom Masala", price: 20.49},
        {name: "Mushroom Baby Corn Masala", price: 20.99},
        {name: "Veg Kofta", price: 20.49},
        {name: "Honest Hungama Veg", price: 20.99},
        {name: "Diwani Handi", price: 20.49},
        {name: "Aloo Mutter Gravy", price: 19.49},
        {name: "Chana Masala", price: 19.49}
    ],

    "GREEN GRAVY": [
        {name: "Nargish Kofta", price: 20.99},
        {name: "Palak Paneer", price: 20.99},
        {name: "Veg Hyderabadi", price: 20.49},
        {name: "Sason Ka Saag", price: 20.99}
    ],

    "WHITE GRAVY": [
        {name: "Khoya Kaju", price: 21.99},
        {name: "Methi Malai Mutter", price: 20.49}
    ],

    "DAL & RICE": [
        {name: "Dal Fry", price: 12.99},
        {name: "Dal Tadka", price: 14.99},
        {name: "Dal Makhani", price: 14.99},
        {name: "Dal Double Tadka", price: 15.99},
        {name: "Hyderabadi Biryani", price: 15.99},
        {name: "Veg Biryani", price: 14.99},
        {name: "Honest Special Biryani", price: 17.49},
        {name: "Jeera Rice", price: 8.99},
        {name: "Steamed Rice", price: 5.99},
        {name: "Small Bowl Of Steamed Rice", price: 2.99}
    ],

    "COMBO & THALI": [
        {name: "Punjabi Thali", price: 22.99},
        {name: "Chana Puri", price: 14.99},
        {name: "Chur Chur Naan Combo", price: 17.49},
        {name: "Chhole Bhature", price: 17.99}
    ],

    "PAPAD / RAITA / SALAD": [
        {name: "Fried Papad", price: 2.49},
        {name: "Roasted Papad", price: 1.99},
        {name: "Roasted Masala Papad", price: 3.99},
        {name: "Fried Masala Papad", price: 3.99},
        {name: "Honest Sp. Masala Papad", price: 4.39},
        {name: "Honest Sp. Cheese Masala Papad", price: 4.99},
        {name: "Punjabi Masala Papad", price: 4.99},
        {name: "Cheese Punjabi Masala Papad", price: 5.99},
        {name: "Pineapple Raita", price: 5.99},
        {name: "Boondi Raita", price: 5.99},
        {name: "Veg Raita", price: 5.99},
        {name: "Plain Curd", price: 5.99},
        {name: "Green Salad", price: 10.99}
    ],

    "INDIAN BREADS": [
        {name: "Plain Roti", price: 4.99},
        {name: "Butter Roti", price: 5.99},
        {name: "Plain Naan/Kulcha", price: 5.49},
        {name: "Butter Naan/Kulcha", price: 6.49},
        {name: "Cheese Naan", price: 8.49},
        {name: "Cheese Chilli Naan", price: 8.99},
        {name: "Cheese Garlic Naan", price: 9.29},
        {name: "Cheese Chilly Garlic Naan", price: 9.49},
        {name: "Garlic Naan", price: 7.19},
        {name: "Chilly Garlic Naan", price: 7.99},
        {name: "Onion Kulcha", price: 8.49},
        {name: "Paneer Kulcha", price: 8.99},
        {name: "Onion & Paneer Kulcha", price: 9.69},
        {name: "Chur Chur Stuffing Naan", price: 11.99}
    ],

    "DESSERTS / SWEET": [
        {name: "Gulab Jamun (2pcs)", price: 5.99}
    ]
};

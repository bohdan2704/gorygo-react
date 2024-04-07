export const altText = "Hi, I am image, I am going to be here in a sec."
export const imgFolder = "img/"
export const apiPath = "http://localhost:8080/api"
export const mainCategories = ["Backpacks", "Equipment", "Footwear", "Clothes"]
export const defaultProductJson = {
    naming: "Example Product Name",
    description: "This is a default product description. Exact description is loading...",
    price: 59.99,
    categoryId: 0,
    sizeIds: [0],
    imageIds: [0],
    reviewIds: [0],
    questionIds: [0]
};

const defaultProductPreviewJson1 = {
    id: 1,
    naming: "Example Product Preview",
    description: "This is a default product description. Exact description is loading...",
    price: 199.99,
    imageIds: [0]
};
const defaultProductPreviewJson2 = {
    id: 2,
    naming: "Some web is loading",
    description: "This is a default product description. Exact description is loading...",
    price: 83.99,
    imageIds: [0]
};
const defaultProductPreviewJson3 = {
    id: 3,
    naming: "Bad internet connection and you are seeing placeholder",
    description: "This is a default product description. Exact description is loading...",
    price: 12.99,
    imageIds: [0]
};

export const defaultProductPreviewsList = [defaultProductPreviewJson1, defaultProductPreviewJson2, defaultProductPreviewJson3]

export const defaultCategoryChain = [
    {
        "id": 1,
        "name": "Main"
    },
    {
        "id": 2,
        "name": "Loading subcategory"
    },
    {
        "id": 4,
        "name": "Loading last subcategory"
    }
]

export const defaultSizesList = [
    {
        "id": 1,
        "naming": "S"
    },
    {
        "id": 2,
        "naming": "M"
    },
    {
        "id": 3,
        "naming": "L"
    }
]

export const defaultImagesList = [
    {
        "id": 1,
        "naming": "placeholder.png",
        "createdAt": "2024-03-30T16:08:26"
    },
    {
        "id": 2,
        "naming": "placeholder.png",
        "createdAt": "2024-03-30T16:08:29"
    },
    {
        "id": 3,
        "naming": "placeholder.png",
        "createdAt": "2024-03-30T16:08:33"
    }
]

export const defaultReviewsList = [
    {
        "id": 1,
        "text": "Osprey backpacks are renowned for their comfort and functionality, and for good reason. Having recently put the [Osprey Model Name] through its paces on several mountain hikes, I'm here to share my comprehensive review, highlighting its strengths, weaknesses, and who it might be best suited for.",
        "stars": 4,
        "createdAt": "2024-03-30T15:59:43",
        "authorId": 0,
        "responseIds": [0]
    },
    {
        "id": 2,
        "text": "The Osprey [Model Name] is a top-of-the-line backpack that delivers on its promise of comfort and functionality. While it might not be the lightest option, the weight is a fair trade-off for the outstanding support, ventilation, and organization it provides. If you're a serious hiker looking for a reliable pack that will handle multi-day adventures with ease, the Osprey [Model Name] is a great choice.",
        "stars": 5,
        "createdAt": "2024-03-30T15:59:49",
        "authorId": 0,
        "responseIds": [0]
    }
]
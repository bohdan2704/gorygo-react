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
    reviewsIds: [0],
    questionIds: [0] // Maybe give some default comments with zero id
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

export const defaultCategoryChain = ["Main", "Loading category", "Next loading category"]

export const defaultProductPreviewsList = [defaultProductPreviewJson1, defaultProductPreviewJson2, defaultProductPreviewJson3]

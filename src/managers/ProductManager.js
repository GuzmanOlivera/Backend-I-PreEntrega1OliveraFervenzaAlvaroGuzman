import fs from "fs/promises";

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.loadProductsFromFile();
    }

    async loadProductsFromFile() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            this.products = JSON.parse(data);
        } catch (error) {
            this.products = [];
        }
    }

    async saveProductsToFile() {
        await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
    }

    async getProducts() {
        return this.products;
    }

    async getProductById(id) {
        return this.products.find(p => p.id === parseInt(id));
    }

    async addProduct(title, description, price, code, status, stock, category, thumbnails) {
        const id = this.products.length ? Math.max(this.products.map(p => p.id)) + 1 : 1;
        const newProduct = { id, title, description, price, code, status, stock, category, thumbnails };
        this.products.push(newProduct);
        await this.saveProductsToFile();
        return newProduct;
    }

    async updateProduct(id, updatedFields) {
        const index = this.products.findIndex(p => p.id === parseInt(id));
        if (index === -1) return null;
        this.products[index] = { ...this.products[index], ...updatedFields, id: this.products[index].id };
        await this.saveProductsToFile();
        return this.products[index];
    }

    async deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === parseInt(id));
        if (index === -1) return null;
        const deletedProduct = this.products.splice(index, 1);
        await this.saveProductsToFile();
        return deletedProduct;
    }
}

export default ProductManager;

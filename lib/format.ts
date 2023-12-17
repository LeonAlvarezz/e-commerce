
export function formatPrice(price: number){
    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formattedPrice;
}

    
export function formatFeatured(featured: boolean){
    const featuredFeatured = featured.toString();
    return featuredFeatured;
}

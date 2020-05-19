export const mapPropertyFromApiToVM = property => {
    return {
        ...property,
        rooms: `${property.rooms} habitaciones`,

        // id: property.id,
        // mainImage: property.mainImage,
        // title: property.title,
        // city: property.city,
        // notes: property.notes,
        // rooms: `${property.rooms} habitaciones`,
        // squareMeter: `${property.squareMeter}m2`,
        // price: property.price,
        // bathrooms: property.bathrooms,
        // image: Array.isArray(property.images) ? property.images[0] : ''
    }
};
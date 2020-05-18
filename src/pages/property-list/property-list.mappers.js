export const mapPropertyListFromApiToVM = (propertyList) => propertyList.map(property => mapPropertyFromApiToVM(property));

const mapPropertyFromApiToVM = property => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} habitaciones`,
        squareMeter: `${property.squareMeter}m2`,
        notes: `${property.notes.substring(0, 240)}...`,
        price: `${property.price.toLocaleString()}€`,
        image: Array.isArray(property.images) ? property.images[0] : ''

    }
}
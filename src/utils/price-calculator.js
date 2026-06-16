export function getSkinRarity(contentTierUuid) {
    switch (contentTierUuid) {
        case '12683d76-48d7-84a3-4e09-6985794f0445':
            return 'Select'
        case '0cebb8be-46d7-c12a-d306-e9907bfc5a25':
            return 'Deluxe'
        case '60bca009-4182-7998-dee7-b8a2558dc369':
            return 'Premium'
        case 'e046854e-406c-37f4-6607-19a9ba8426fc':
            return 'Exclusive'
        case '411e4a55-4e59-7757-41f0-86a53f101bb5':
            return 'Ultra'
        default:
            return 'Unknown'
    }
}

export function getSkinPrice(contentTierUuid) {
    if (!contentTierUuid) return 0

    const rarity = getSkinRarity(contentTierUuid)

    switch (rarity) {
        case 'Select':
            return 8
        case 'Deluxe':
            return 15
        case 'Premium':
            return 25
        case 'Exclusive':
            return 35
        case 'Ultra':
            return 47
        default:
            return 0
    }
}
export type Property = {
    BathroomsFull: number;
    LivingArea: number;
    BedroomsTotal: number;
    ExteriorFeatures: string;
    AssociationAmenities: string;
    ParkingFeatures: string;
    PropertyType: string;
    ListPrice: number;
    ListingType: string;
    BathroomsHalf: number;
    UnparsedAddress: string;
    OnMarketDate: string;
    BuildingAreaTotal: number;
    ListingId: string;
    PublicRemarks: string;
    YearBuilt: number;
    ListingKey: string;
    InteriorFeatures: string;
    Media: [
        {
            MediaURL: string;
            X_MediaStream: string | null;
        }
    ];
};

export interface ApiUsersDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: ApiUserAddressDto | null;
    phone: string;
    website: string;
    company: ApiUserCompanyDto | null;
}
interface ApiUserAddressDto {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ApiUserAddressGeoDto | null;
}
interface ApiUserAddressGeoDto {
    lat: string;
    lng: string;
}
interface ApiUserCompanyDto {
    name: string;
    catchPhrase: string;
    bs: string;
}

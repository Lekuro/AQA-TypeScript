export class ApiUserClassDto {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: ApiAddressClassDto;
    public phone: string;
    public website: string;
    public company: ApiCompanyClassDto;

    public constructor(row: Record<string, unknown>) {
        this.id = row.id as number;
        this.name = row.name as string;
        this.username = row.username as string;
        this.email = row.email as string;
        this.address = new ApiAddressClassDto(row.address as Record<string, unknown>);
        this.phone = row.phone as string;
        this.website = row.website as string;
        this.company = new ApiCompanyClassDto(row.company as Record<string, unknown>);
    }
}

class ApiAddressClassDto {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: { lat: string; lng: string };

    public constructor(row: Record<string, unknown>) {
        this.street = row.street as string;
        this.suite = row.suite as string;
        this.city = row.city as string;
        this.zipcode = row.zipcode as string;
        this.geo = new ApiGeoClassDto(row.geo as Record<string, unknown>);
    }
}

class ApiGeoClassDto {
    public lat: string;
    public lng: string;

    public constructor(row: Record<string, unknown>) {
        this.lat = row.lat as string;
        this.lng = row.lng as string;
    }
}

class ApiCompanyClassDto {
    public name: string;
    public catchPhrase: string;
    public bs: string;

    public constructor(row: Record<string, unknown>) {
        this.name = row.name as string;
        this.catchPhrase = row.catchPhrase as string;
        this.bs = row.bs as string;
    }
}

class ApiPostClassDto {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;

    public constructor(row: Record<string, unknown>) {
        this.userId = row.userId as number;
        this.id = row.id as number;
        this.title = row.title as string;
        this.body = row.body as string;
    }
}

export class ApiUserWithPostClassDto extends ApiUserClassDto {
    private static postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

    public posts: ApiPostClassDto[];

    public constructor(user: Record<string, unknown>) {
        super(user);
        this.id = user.id as number;
        this.name = user.name as string;
        this.username = user.username as string;
        this.email = user.email as string;
        this.address = JSON.parse(JSON.stringify(user.address)) as ApiAddressClassDto;
        this.phone = user.phone as string;
        this.website = user.website as string;
        this.company = user.company as ApiCompanyClassDto;
        this.posts = [] as ApiPostClassDto[];
    }
    public async getPosts(): Promise<void> {
        try {
            const response = await fetch(ApiUserWithPostClassDto.postUrl + this.id);
            const jsonData = await response.json();
            this.posts = jsonData as ApiPostClassDto[];
        } catch (error) {
            console.log('Error loading posts:', error);
        }
    }
}

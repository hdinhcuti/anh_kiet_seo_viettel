type PackageCategory = 'internet' | 'camera' | 'tv';

export interface PackageItem {
    id: string;
    name: string;
    speed: string;
    description: string;
    price: string;
}

export interface PackageData {
    internet: PackageItem[];
    camera: PackageItem[];
    tv: PackageItem[];
}

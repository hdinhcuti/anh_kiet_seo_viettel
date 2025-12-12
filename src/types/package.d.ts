type PackageCategory = 'internet' | 'camera' | 'tivi';

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
    tivi: PackageItem[];
}

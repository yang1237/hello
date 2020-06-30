import { request } from './request';
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid,
        }
    })
}
export class GoodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.discount = itemInfo.discountDesc;
        this.newPrice = itemInfo.price;
        this.realPrice = itemInfo.lowNowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.columns = columns;
        this.services = services;
    }
}
export class ShopInfos {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}
export class ProductParams{
    constructor(info,rule){
        this.info=info.set;
        this.size=rule.tables;
        this.image=info.images?info.images[0]:'';
    }
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}
export class SkuInfo{
    constructor(props,totalStock,title,skus,price){
       
        this.props=props
        this.title=title
        this.totalStock=totalStock
        this.skus=skus
        this.price=price
    }
}
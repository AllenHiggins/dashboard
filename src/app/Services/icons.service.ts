import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  iconList = [];

  constructor() {
    this.iconList = [
      {'text': 'arrows-1_cloud-download-93', 'iconClass': 'fas fa-cloud-download-alt'},
      {'text': 'arrows-1_cloud-upload-94', 'iconClass': 'fas fa-cloud-upload-alt'},
      {'text': 'arrows-1_minimal-down', 'iconClass': 'fal fa-angle-down'},
      {'text': 'arrows-1_minimal-left', 'iconClass': 'fal fa-angle-left'},
      {'text': 'arrows-1_minimal-right', 'iconClass': 'fal fa-angle-right'},
      {'text': 'arrows-1_minimal-up', 'iconClass': 'fal fa-angle-up'},
      {'text': 'arrows-1_refresh-69', 'iconClass': 'fas fa-sync-alt'},
      {'text': 'arrows-1_share-66', 'iconClass': 'fas fa-sync-alt'},
      {'text': 'business_bank', 'iconClass': 'fas fa-piggy-bank'},
      {'text': 'business_badge', 'iconClass': 'far fa-id-badge'},
      {'text': 'business_briefcase-24', 'iconClass': 'fas fa-briefcase'},
      {'text': 'business_bulb-63', 'iconClass': 'far fa-lightbulb'},
      {'text': 'arrows-1_cloud-download-93', 'iconClass': 'fas fa-cloud-download-alt'},
      {'text': 'arrows-1_cloud-upload-94', 'iconClass': 'fas fa-cloud-upload-alt'},
      {'text': 'arrows-1_minimal-down', 'iconClass': 'fal fa-angle-down'},
      {'text': 'arrows-1_minimal-left', 'iconClass': 'fal fa-angle-left'},
      {'text': 'arrows-1_minimal-right', 'iconClass': 'fal fa-angle-right'},
      {'text': 'arrows-1_minimal-up', 'iconClass': 'fal fa-angle-up'},
      {'text': 'arrows-1_refresh-69', 'iconClass': 'fas fa-sync-alt'},
      {'text': 'arrows-1_share-66', 'iconClass': 'fas fa-sync-alt'},
      {'text': 'business_bank', 'iconClass': 'fas fa-piggy-bank'},
      {'text': 'business_badge', 'iconClass': 'far fa-id-badge'},
      {'text': 'business_briefcase-24', 'iconClass': 'fas fa-briefcase'},
      {'text': 'business_bulb-63', 'iconClass': 'far fa-lightbulb'},
      {'text': 'arrows-1_cloud-download-93', 'iconClass': 'fas fa-cloud-download-alt'},
      {'text': 'arrows-1_cloud-upload-94', 'iconClass': 'fas fa-cloud-upload-alt'},
      {'text': 'arrows-1_minimal-down', 'iconClass': 'fal fa-angle-down'},
      {'text': 'arrows-1_minimal-left', 'iconClass': 'fal fa-angle-left'},
      {'text': 'arrows-1_minimal-right', 'iconClass': 'fal fa-angle-right'},
      {'text': 'arrows-1_minimal-up', 'iconClass': 'fal fa-angle-up'},
      {'text': 'arrows-1_refresh-69', 'iconClass': 'fas fa-sync-alt'},
      {'text': 'arrows-1_share-66', 'iconClass': 'fas fa-sync-alt'},
      {'text': 'business_bank', 'iconClass': 'fas fa-piggy-bank'},
      {'text': 'business_badge', 'iconClass': 'far fa-id-badge'},
      {'text': 'business_briefcase-24', 'iconClass': 'fas fa-briefcase'},
      {'text': 'business_bulb-63', 'iconClass': 'far fa-lightbulb'}
    ];

    console.log(this.iconList);
  }

  getIconList() {
    return this.iconList.slice();
  }
}


export class FunckNgxTab{
    constructor(
        public selectedTabIndex?: number,
        public tabType?: 'vertical' | 'horizontal') {

        if(!this.selectedTabIndex) {
            this.selectedTabIndex = 0;
        }

        if(!this.tabType) {
            this.tabType = 'horizontal';
        }

    }
}
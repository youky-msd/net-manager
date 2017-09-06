<<template>
    <section class="container">
        <header>
            <span>未选项</span>
            <span>已选项</span>
        </header>
        <article class="multiselect">
            <div class="select-left">
                <button v-for="(item,index) in candidates"
                    :key="index"
                    :data-val="item.value"
                    @click.stop.prevent="selectItem">
                    {{ item.name }}
                </button>
            </div>
            <div class="select-right">
                <button v-for="(item,index) in selectedorganize"
                    :key="index"
                    :data-val="item.value"
                    @click.stop.prevent="cancleClk">
                    {{ item.name }}
                </button>
            </div>
        </article>
        <div class="select-middle">
            <span class="btn-switch" title="全选" @click.stop.prevent="selectItemAll">&gt;</span>
            <span class="btn-switch-b" title="清除" @click.stop.prevent="revocationItemAll">&lt;</span>
        </div>
    </section>
</template>


<script>
export default {
    props: {
        candidates: Array
    },
    data () {
        return {
            selectedorganize: []
        }
    },
    mounted () {
        this.candidates.sort(this.compare('name'));
    },
    created () {
    },
    methods: {
        selectItem (e) {
            // console.log();
            let aimVal = e.target.dataset.val;
            let leftArr = this.candidates;
            let aimIndex
            for (let i=0; i<leftArr.length; i++) {
               if (leftArr[i].value === parseInt(aimVal)) {
                   aimIndex = i;
                   break;
               }
            }
            this.selectedorganize.push(leftArr[aimIndex]);
            this.selectedorganize.sort(this.compare('name'));
            this.candidates.splice(aimIndex, 1);
        },
        cancleClk (e) {
            // console.log(e);
            let aimVal = e.target.dataset.val;
            let rightArr = this.selectedorganize;
            let aimIndex
            for (let i=0; i<rightArr.length; i++) {
               if (rightArr[i].value === parseInt(aimVal)) {
                   aimIndex = i;
                   break;
               }
            }
            this.candidates.push(rightArr[aimIndex]);
            this.candidates.sort(this.compare('name'));
            this.selectedorganize.splice(aimIndex, 1);
        },
        selectItemAll () {
            this.candidates.forEach(function(element) {
                this.selectedorganize.push(element);   
            }, this);
            this.selectedorganize.sort(this.compare('name'));
            this.candidates.splice(0, this.candidates.length);
        },
        revocationItemAll () {
            this.selectedorganize.forEach(function(element) {
                this.candidates.push(element);   
            }, this);
            this.candidates.sort(this.compare('name'));
            this.selectedorganize.splice(0, this.selectedorganize.length);
        },
        compare (prop) {
            return function (obj1, obj2) {
                let val1 = obj1[prop];
                let val2 = obj2[prop];
                if (typeof val1 === 'string') {
                    val1 = val1.charAt(0).charCodeAt();
                }
                if (typeof val2 === 'string') {
                    val2 = val2.charAt(0).charCodeAt();
                }
                return val1 - val2;
            }
        }
    },
    watch: {
        'selectedorganize' () {
            this.$emit('input', this.selectedorganize);
        }
    }
}
</script>


<style lang="scss" scoped>
$border: 1px solid rgba(200,200,200,.9);
.container {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    > header {
        display: flex;
        flex-direction: row;
        border-right: $border;
        border-left: $border;
        border-top: $border;
        border-radius: 4px;
        > span {
            flex: 1;
            text-align: center;
            color: 14px;
            height: 30px;
            line-height: 30px;
        }
    }
}
.multiselect {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 99%;
    overflow-y: auto;
    border-radius: 4px;
    border: $border;
    align-items: top;
    background-color: white;
}

.select-left {
    flex: 2;
    margin-right: 20%;
    height: auto;
    padding: .5rem 0 .5rem .5rem;
}
.select-middle {
    display: block;
    width: 20%;
    height: 99%;
    position: absolute;
    left: 40%;
    top: 30px;
    border-left: $border;
    border-right: $border;
    .btn-switch {
        display: block;
        margin: 50% auto 0px;
        height: 30px;
        line-height: 30px;
        width: 30px;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
        transform: scale(1.2);
    }
    .btn-switch-b {
        @extend .btn-switch;
        margin: 0px auto 40%;
    }
}
.select-right {
    flex: 2;
    margin-left: 10%;
    padding: .5rem 0 .5rem .5rem;
    > button {
        background-color: rgba(200,200,200,1);
        border-color: rgba(200,200,200,.5);
    }
}

button {
    display: block;
    padding: 0 .5rem;
    border-radius: 3px;
    margin-bottom: .7rem;
    border: $border;
    cursor: pointer;
    line-height: 1.5;
    background-color: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



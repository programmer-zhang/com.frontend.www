<template>
    <div class="page-manage">
        <Card>
        <Row>
            <div style="background: #f8f8f9;margin-top: 10px;">
            <div style="padding: 10px 10px 0;">
                <Input v-model="searchKey" placeholder="输入名称搜索" search @on-change="searchApi()"></Input>
            </div>
            <div style="padding: 10px 20px 20px 20px;">
                <Tree ref="Tree" :data="treeData"
                @on-select-change="selectTreeData"
                :load-data="loadData"
                :render="renderContent"
                empty-text="数据加载中。。。">
                </Tree>
            </div>
            </div>
        </Row>
        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchKey: '',
            buttonProps: {
                type: 'default',
                size: 'small'
            },
            treeData: [{
                title: 'parent 1',
                show: false,
                children: [{
                    title: 'parent 1-1',
                    show: false,
                    children: [{
                        loading: true,
                        show: false,
                        title: 'leaf 1-1-1',
                        children: []
                    }, {
                        loading: true,
                        show: false,
                        title: 'leaf 1-1-2',
                        children: []
                    }]
                },
                    {
                        title: 'parent 1-2',
                        loading: false,
                        show: false,
                        children: [{
                            title: 'leaf 1-2-1',
                            show: false,
                            children: []
                        }, {
                            title: 'leaf 1-2-1',
                            show: false,
                            children: []
                        }]
                    }
                ]
            }
            ]
        };
    },
    mounted() {},
    methods: {
        loadData(item, callback) {
            let data = [{
                title: 'children' + this.searchKey,
                loading: false,
                show: false,
                children: []
            }, {
                title: 'children',
                loading: false,
                show: false,
                children: []
            }];
            callback(data);
        },
        renderContent(h, {
                root,
                node,
                data
            }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    height: '24px',
                    lineHeight: '24px',
                    width: '100%'
                },
                on: {
                    mouseenter: () => {
                        data.show = true;
                    },
                    mouseleave: () => {
                        data.show = false;
                    }
                }
            }, [
                h('span', data.title),
                h('span', {
                    style: {
                        display: data.show ? 'inline-block' : 'none',
                        marginLeft: '30px'
                    }
                }, [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                            icon: 'md-create'
                        },
                        style: {
                            marginRight: '10px'
                        },
                        on: {
                            click: () => {
                                this.edit(data);
                            }
                        }
                    }),
                    h('Button', {
                        props: {
                            type: 'success',
                            size: 'small',
                            icon: 'md-add'
                        },
                        style: {
                            marginRight: '10px'
                        },
                        on: {
                            click: () => {
                                this.append(data);
                            }
                        }
                    }),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-remove'
                        },
                        on: {
                            click: () => {
                                this.remove(root, node, data);
                            }
                        }
                    })
                ])
            ]);
        },
        edit(data) {
            console.log('编辑');
        },
        append(data) {
            console.log('增加');
        },
        remove(data) {
            console.log('删除');
        },
        selectTreeData() {},
        searchApi() {}
    }
}
</script>
<style scoped>
.page-manage {
    margin: 20px;
    text-align: left;
}
</style>
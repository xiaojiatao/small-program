// components/more
Component({
  properties: {
    childdata:{
      type:Object,
      value: ""
    }
  },
  data: {
    commentcontent: [{
      head: "/img/head.jpg",
      time: "Patrick 2015.10.10",
      content: "本吃货是荣料理的老常客了,现在改为荣新馆后, 个人感觉更高大上了,食物一如既往的新鲜,推荐血蟹脚、海胆还有小鲍鱼等等,希望服务能提高一点。"
    }, {
        head: "/img/head.jpg",
        time: "sunny 2020.10.03",
        content: "好，好吃，真好吃"
      }, {
        head: "/img/head.jpg",
        time: "Patrick 2015.10.10",
        content: "本吃货是荣料理的老常客了,现在改为荣新馆后, 个人感觉更高大上了,食物一如既往的新鲜,推荐血蟹脚、海胆还有小鲍鱼等等,希望服务能提高一点。"
      }]
  },
  methods: {
    handleTap() {
      this.triggerEvent("lookDetail", { tag: 'wine' })
    }
  }
})


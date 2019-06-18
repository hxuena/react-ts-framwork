interface Result {
  title: string;
}

interface IYdata {
  data: string;
  result: Result;
}

class Test {
  private data;
  constructor(str: IYdata){
    this.data = str.data
  }
  log() {
    console.log(this.data)
  }
}

const test = new Test({
  result: {
    title: '冲击月薪三万'
  },
  data: '努力学习'
})
test.log()
import { Stack } from "./util";

/**
 * @description: UndoRedo
 * @param {*}
 * @Author: Aiden
 * @return {*}
 */
  class UndoRedo {
    constructor(params){
      this.params = params;
    }
    undo(){
      // 自己实现
    }
    redo(){
      // 自己实现
    }
  }

  class AddNode extends UndoRedo {
    constructor(props){
      super(props)
      this.parent = props.parent
      this.target = {
        id: props.data.id,
        name: props.data.name,
        parentId: props.parent.id,
        children: []
      }
      this.parent.children.push(this.target)
      this.target.index = this.parent.children.length - 1
    }
    undo(){
        this.parent.children.pop()
    }
    redo(){
        this.parent.children.push(this.target)
    }
  }

  class UpdateNode extends UndoRedo {
    constructor(props){
      super(props)
      this.name = props.node.name
      this.oldName = props.oldName
      this.target = props.node
    }
    undo(){
      this.target.name = this.oldName;
    }
    redo(){
      this.target.name = this.name;
    }
  }

  class RemoveNode extends UndoRedo {
    constructor(props){
      super(props)
      this.parent = props.parent
      this.target = props.target
      for(let i = 0; i < this.parent.children.length; i++){
        if(this.target.id === this.parent.children[i].id){
          this.parent.children.splice(i, 1)
          break
        }
      }
    }
    undo(){
      const tempParent = JSON.parse(JSON.stringify(this.parent.children))
      if(tempParent.length <=0 ){
        this.parent.children.push(this.target)
      } else if(tempParent.length === 1){
        if(this.target.index > tempParent[0].index){
          this.parent.children.splice(1, 0 ,this.target)
        } else {
          this.parent.children.splice(0, 0 ,this.target)
        }
      }else {
        for(let i = 0; i < tempParent.length; i++){
          if(this.target.index > tempParent[i].index && this.target.index < tempParent[i + 1].index){
            this.parent.children.splice(i+1, 0 ,this.target)
            break
          } else if(this.target.index < tempParent[i].index){
            this.parent.children.splice(i, 0 ,this.target)
            break
          }
        }
      }
    }
    redo(){
      for(let i = 0; i < this.parent.children.length; i++){
        if(this.target.id === this.parent.children[i].id){
          this.parent.children.splice(i, 1)
          break
        }
      }
    }
  }

class UndoRedoWrapper {
  constructor() {
    this.undoStack = new Stack();
    this.redoStack = new Stack();
  }
  /**
   * @description: 用于存储需要的数据
   * @param {*} key
   * @param {*} value
   * @Author: 
   * @return {*}
   */  
  save(key, value) {
    this[key] = value;
  }

  do(action) {
    // 每一次操作元素，直接将当前操作存入undo栈中
    this.undoStack.push(action);
    // 每次操作一次后redo栈要进行清空操作
    this.redoStack.toEmpty() 
  }
  undo(){
    if(this.undoStack.count <=0){
      return
    }
    const action = this.undoStack.pop();
    action.undo(); // 元素本身的undo操作
    this.redoStack.push(action);
  }
  redo(){
    if(this.redoStack.count <=0){
      return
    }
    const action = this.redoStack.pop();
    action.redo();// 元素本身的redo操作
    this.undoStack.push(action);
  }
}

export { AddNode,UpdateNode,RemoveNode, UndoRedoWrapper };

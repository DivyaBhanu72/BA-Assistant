import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDragEnd} from '@angular/cdk/drag-drop';
// import { DiagramComponent, Diagram, ConnectorModel, DiagramTools,BasicShapeModel,Node, NodeModel} from '@syncfusion/ej2-angular-diagrams';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PointModel, DiagramTools, ScrollSettingsModel,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-angular-diagrams';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
import { remove } from '@syncfusion/ej2-base';
import {  UndoRedo,SnapSettingsModel, SnapConstraints, Rect} from '@syncfusion/ej2-diagrams';
import { DomainmodelService } from 'src/app/services/domainmodel/domainmodel.service';
Diagram.Inject(ConnectorEditing, UndoRedo)




class ClassModel {
  props =[];
  visible=true;
  margintop;
  marginleft;
}


@Component({
  selector: 'app-domain-model',
  templateUrl: './domain-model.component.html',
  styleUrls: ['./domain-model.component.css']
})
export class DomainModelComponent{
  constructor(public domainmodelService:DomainmodelService)
  {

  }
  
  @ViewChild('diagram', {static: true})
  public diagram: DiagramComponent;
  pageSettings: Object;
  isaddEntityClicked=false

 
  public continuousDraw: boolean = true;
  public snapSettings: SnapSettingsModel = {
    // Define the Constraints for gridlines and snapping
    constraints: SnapConstraints.ShowLines,
    // Defines the horizontalGridlines for SnapSettings
    horizontalGridlines: {
        // Sets the line color of gridlines
        lineColor: 'white',
        // Defines the lineDashArray of gridlines
        lineDashArray: '1 1'
    },
    // Defines the verticalGridlines for SnapSettings
    verticalGridlines: {
        lineColor: 'white',
        lineDashArray: '1 1'
    }
};


  

  public polylineConnector(): void {
    //create connector
    // this.diagram:DiagramComponent
    var connector = { id: 'connector1', type: 'Polyline', constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb };
    console.log(this.diagram)
    this.diagram.drawingObject = connector;
    // tool activated to draw connector continuously
    this.diagram.tool = DiagramTools.DrawOnce;
    this.diagram.dataBind();
  }

  

  public diagramCreate(args: Object): void {
      
  }
  enterclicked(event)
  {
    console.log(event.target.value)
    this.domainmodelService.RecivedItems.splice(0,0,event.target.value)
    this.isaddEntityClicked=false;
  }
  addEntityClicked()
  {
    this.isaddEntityClicked=true;
  }

  public connectors:ConnectorModel;
  public scrollSettings: ScrollSettingsModel;
  myInterval:any;
  
  

  ngOnInit() {
   
    this.myInterval= setInterval(() => {
      
      if(this.domainmodelService.RecivedItems==null)
      {
        this.domainmodelService.flag=false
       
       
        // this.domainmodelService.RecivedItems

        console.log("output not received")
      }
      else if(this.domainmodelService.RecivedItems!=null)
      {
        this.domainmodelService.flag=true
        clearInterval(this.myInterval)
      }

    },1000)


    // Defines the pageSettings for the diagram
    // this.diagram.drawingObject={ id: 'connector1', type: 'Polyline', constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb }
    if(this.domainmodelService.RecivedItems!=null)
    {
      
    // console.log(this.domainmodelService.RecivedItems)
    this.items=this.domainmodelService.RecivedItems
    console.log(this.items)
    console.log(this.domainmodelService.flag)

    this.domainmodelService.flag=true
    console.log(this.domainmodelService.flag)
    

    }
    
    
    this.pageSettings = {
      //Sets scroll limit as limited
      scrollLimit: "Diagram",
      //Sets the limited scrollable area
      
      
  }

  }

  onCloseClick(model:ClassModel)
  {
     model.visible=false
     model.props.forEach(item=>{
       this.domainmodelService.RecivedItems.splice(0,0,item)
      //  this.domainmodelService.RecivedItems.push(item)
     })
  }

title = 'DragAndDrop';
items=[]
class1 :ClassModel
listofModels=[];
element:HTMLCollection
htmlelement:HTMLElement
count=0;
margintop;





flag=1;
 

  drop(event: CdkDragDrop<string[]>) {
    // console.log(event.item.data)
    // console.log(item)
    // console.log('dropped Event',`> dropped '${event.item.data}' into '${event.container.id}'`);
    if (event.previousContainer === event.container) {
      //console.log(this.items.find(x => x ===event.item.data ));
      if(event.container.data.find(x => x ===event.item.data )!=null )
      {
        const max=-524;
        const min=-70;

        
        
        if(this.flag==0)
        {
         
          
      this.class1=new ClassModel()
      this.class1.props.push(event.item.data)
      const val=Math.floor(Math.random() * (max - min + 1)) + min
      this.class1.margintop=val
      console.log(this.class1.margintop)
      const max2=700;
      const min2 = 438;
      const val2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2
      this.class1.marginleft=val2
      this.count++;

    
      
      this.listofModels.push(this.class1)
      
      

      event.container.data.forEach( (item, index) => {
        if(item === event.item.data)
        {
         this.domainmodelService.RecivedItems.splice(index,1);
  
        }
      });
      console.log(this.listofModels)
      }

    }
      
     
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
      
     }
     

    else {
      // console.log(event)
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  onDragEnded(event: CdkDragEnd): void {
    const { offsetLeft, offsetTop } = event.source.element.nativeElement;
    const { x, y } = event.distance;
    // console.log(offsetLeft, offsetTop )
    console.log(x)
    if(x>100)
    {
      this.flag=0
    }
    else
    {
      this.flag=1
    }
    

    // this.positionX = offsetLeft + x;
    // this.positionY = offsetTop + y;
    // this.showPopup = true;
    // console.log({ positionX, positionY });// returns { x: 0, y: 0 }
  }
 


}

import { ViewChild, ViewChildren, Component} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
<button (click)="videoStart()">VideoStart</button>
<video #hardwareVideo></video>
  `,
  styles: []
})
export class ExampleComponent {

  @ViewChild('hardwareVideo') hardwareVideo: any;
  
  constructor() { }
  
  videoStart(){
    let video = this.hardwareVideo.nativeElement;

    var n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
    
    // NOTE: For Video + Audio
    // n.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
    //     video.src = window.URL.createObjectURL(stream);
    //     video.play();
    // });

  }

}
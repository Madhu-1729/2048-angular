import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @ViewChild('hiddenInput') hiddenInputRef: ElementRef;

  constructor() {}
  public board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  // public board = [
  //   [16, 2, 8, 4],
  //   [16, 2, 8, 4],
  //   [16, 2, 8, 4],
  //   [16, 2, 8, 4],
  // ];
  tempBoard = [];
  ngOnInit(): void {
    this.getRandom();
    this.getRandom();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      console.log('Arrow Up pressed');
      this.moveUp();
    } else if (event.key === 'ArrowDown') {
      console.log('Arrow Down pressed');
      this.movedown();
    } else if (event.key === 'ArrowLeft') {
      console.log('Arrow Left pressed');
      this.moveLeft();
    } else if (event.key === 'ArrowRight') {
      console.log('Arrow Right pressed');
      this.moveRight();
    }
  }
  movedown() {
    let tempArray = JSON.parse(JSON.stringify(this.board));
    for (let i = 0; i < this.board.length; i++) {
      let dArray=[]
      dArray.push(this.board[3][i])
      dArray.push(this.board[2][i])
      dArray.push(this.board[1][i])
      dArray.push(this.board[0][i])
      console.log(dArray,"D ARRAY VALUES")
      let it = this.reorderRow1(JSON.parse(JSON.stringify(dArray)));
      console.log(it,"IT values")
      this.board[3][i] = it[0]
      this.board[2][i] = it[1]
      this.board[1][i] = it[2]
      this.board[0][i] = it[3]
    }
    if (!this.arraysEqual(tempArray, this.board)) {
      this.getRandom();
    }
  }
  moveUp() {
    let tempArray = JSON.parse(JSON.stringify(this.board));
    for (let i = 0; i < this.board.length; i++) {
      let dArray=[]
      dArray.push(this.board[0][i])
      dArray.push(this.board[1][i])
      dArray.push(this.board[2][i])
      dArray.push(this.board[3][i])
      console.log(dArray,"D ARRAY VALUES")
      let it = this.reorderRow1(JSON.parse(JSON.stringify(dArray)));
      console.log(it,"IT values")
      this.board[0][i] = it[0]
      this.board[1][i] = it[1]
      this.board[2][i] = it[2]
      this.board[3][i] = it[3]
    }
    if (!this.arraysEqual(tempArray, this.board)) {
      this.getRandom();
    }
  }
  moveRight() {
    let tempArray = JSON.parse(JSON.stringify(this.board));
    for (let i = 0; i < this.board.length; i++) {
      let it = this.reorderRow1(JSON.parse(JSON.stringify(this.board[i].reverse())));
      this.board[i] = it.reverse()
    }
    if (!this.arraysEqual(tempArray, this.board)) {
      this.getRandom();
    }
  }

  moveLeft() {
    let tempArray = JSON.parse(JSON.stringify(this.board));
    for (let i = 0; i < this.board.length; i++) {
      this.reorderRow(this.board[i]);
    }
    if (!this.arraysEqual(tempArray, this.board)) {
      this.getRandom();
    }
  }

  reorderRow1(row: any[]) {
    if (!row.every((value) => value == 0)) {
      for (let i = 0; i < row.length; i++) {
        if (row[i] != 0) {
          for (let p = i + 1; p < row.length; p++) {
            if (row[p] == 0) {
            } else if (row[p] == row[i]) {
              row[i] *= 2;
              row[p] = 0;
            } else {
              i = p;
            }
          }
        }
      }

      let j = 0;
      let index = 0;
      while (j < 4) {
        if (row[index] == 0) {
          let item = row.splice(index, 1)[0];
          row.push(item);
        } else {
          index++;
        }
        j++;
      }
    }
    // console.log(row)
    return row;
  }

  reorderRow(row: any[]) {
    if (!row.every((value) => value == 0)) {
      for (let i = 0; i < row.length; i++) {
        if (row[i] != 0) {
          for (let p = i + 1; p < row.length; p++) {
            if (row[p] == 0) {
            } else if (row[p] == row[i]) {
              row[i] *= 2;
              row[p] = 0;
            } else {
              i = p;
            }
          }
        }
      }

      let j = 0;
      let index = 0;
      while (j < 4) {
        if (row[index] == 0) {
          let item = row.splice(index, 1)[0];
          row.push(item);
        } else {
          index++;
        }
        j++;
      }
    }
    // console.log(row)
  }

  ngAfterViewInit() {
    this.hiddenInputRef.nativeElement.focus();
  }

  getRandom() {
    let emptyBox = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] == 0) {
          emptyBox.push(i + '*' + j);
        }
      }
    }
    let boxRandom = Math.floor(Math.random() * emptyBox.length);
    this.board[emptyBox[boxRandom].split('*')[0]][
      emptyBox[boxRandom].split('*')[1]
    ] = 2;
  }
  arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
      if (!arr1[i].every((value, index) => value === arr2[i][index])) {
        return false;
      }
    }
    return true;
  }
  getColor(value: number): string {
    // Map each value to a specific color
    switch (value) {
      case 0:
        return 'rgba(238,228,218,.35)';
      case 2:
        return '#eee4da';
      case 4:
        return '#ede0c8';
      case 8:
        return '#f2b179';
      case 16:
        return '#f59563';
      case 32:
        return '#f67c5f';
      case 64:
        return '#f65e3b';
      default:
        return 'black';
    }
  }
}

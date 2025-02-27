import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/data/firestore.service';
import { NgFor } from '@angular/common';
@Component({
	selector: 'app-week-view',
	imports: [NgFor],
	templateUrl: './week-view.component.html',
	styleUrl: './week-view.component.sass',
	standalone:true
})
export class WeekViewComponent implements OnInit{
	users: any[] = [];
	constructor(private firestoreService: FirestoreService) {}

	ngOnInit() {
	  this.firestoreService.getUsers().subscribe(data => {
		this.users = data;
	  });
	}
}

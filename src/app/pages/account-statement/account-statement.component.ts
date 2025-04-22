import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountStatementService } from '../../core/services/account-statement.service';

@Component({
  selector: 'app-account-statement',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.scss'
})
export class AccountStatementComponent implements OnInit {

  sportsCatgories:any = [];
  statements :any =[];

  form: FormGroup;

  constructor(private dashboardService :DashboardService,private fb: FormBuilder,private accountStatementService :AccountStatementService) {

    this.form = this.fb.group({
      sports: ['ALL'],
      startDate: [''],
      endDate: [''],
    });


  }


  ngOnInit(): void {
   this.getSportsCategories();
  }


  getSportsCategories() {
    this.dashboardService.getsportsCatogories().subscribe({
      next: (response) => {

        this.sportsCatgories = response.categories;
      },
      error: (err) => {
        console.error('Error fetching sports categories  data:', err);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    })
  }


  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      

      // this.accountStatementService.postData(formData).subscribe({
      //   next:(response) => {
      //     console.log(response);
      //   },
      //   error :(err) => {
      //     console.log("Api not integrated")
      //   },
      // })

    }
  }
}

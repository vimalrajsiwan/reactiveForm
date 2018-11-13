import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails, Address } from '../../class/UserDetails';

@Component({
  selector: 'app-reactiveForm',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.css']
})
export class ReactiveFormComponent implements OnInit {
  //title = 'my-app';
  private id:number=0;
  private userData:UserDetails;
  private userDataList:UserDetails[]=[];
  private userForm:FormGroup; 
  get address(): FormArray { 
    return this.userForm.get('address') as FormArray; 
  }

  constructor(private fb:FormBuilder){
        this.userForm=this.fb.group({
            id:[null],
            name:['',Validators.required],
            address:this.fb.array([
              //this.initAddress()
                this.fb.group({
                    city: ['']
                })
            ])
        });
  }

  ngOnInit(){

  }

  // initAddress(){
  //   this.fb.group({
  //     city: ['']
  // });
  // }

  addAddress(event: Event){
      event.preventDefault();
    //1st Way
    //let control = <FormArray>this.userForm.controls["address"];
    let control = <FormArray>this.userForm.controls.address;
        control.push(
            this.fb.group({
            city: ['']
           })
        );
        
  }
  
  deleteAddress(i) {
    //1st Way
    //let control = <FormArray>this.userForm.controls.address;
    //control.removeAt(i);

    //2nd Way
    this.address.removeAt(i);
  }

  addUser(){
      let index = this.userForm.controls["id"].value;
        //this.userData.id=this.userForm.controls["index"].value;
        //this.userData.name=this.userForm.controls["name"].value;
        //this.userData.address=this.userForm.controls["address"].value;
        //this.userData.name=this.userForm.value.name;
        this.userData=this.userForm.value;

        if(index != null) {
            this.userDataList[index] = this.userData;
          } else {
            this.userData.id=this.id;
            this.userDataList.push(this.userData);
            this.id+=1;
          }
        //   this.form.reset() // reset form to empty
        // if(this.userForm.controls.index){
        // this.id+=1;
        // this.userData.id=this.id;
        // this.userDataList.push(this.userData);
        // }
        
        //let control = <FormArray>this.userForm.controls.address;
        //control.controls.splice(1,control.controls.length);
        this.address.controls.splice(1,this.address.controls.length);
        this.userForm.reset();

  }
  editUser(data: UserDetails){
    //1st Way
        // this.userForm.setValue({
        //     id:data.id,
        //     name: data.name,
        //     address:this.fb.array([
        //         this.setAddressInEditMode(data.address),
        //       ])
        // });

    //2nd Way
        this.userForm.patchValue({
              id:data.id,
              name: data.name,
              // address:this.fb.array([
              //     this.setAddressInEditMode(data.address),
              //   ])
          });
          this.setAddressInEditMode(data.address);
  }
  // setExpenseCategories(){
  //   let control = <FormArray>this.expenseEditForm.controls.expense_expense_categories_attributes;
  //   this.expense.expense_expense_categories.forEach(x => {
  //     control.push(this.fb.group({amount: x.amount}))
  //   })
  // }

  setAddressInEditMode(address:Address[]){
    debugger;
    //1st Way
    // let control = <FormArray>this.userForm.controls.address;
    // control.controls.splice(0);
    // for ( let ads of address){
    //     let control = <FormArray>this.userForm.controls.address;
    //     control.push(
    //         this.fb.group({
    //         city: [ads.city]
    //        })
    //     );
    //   }

    // const control = <FormArray>this.userForm.controls.address;
    //   for(let i = control.length-1; i >= 0; i--) {
    //   control.removeAt(i)
    //   }
    //control.removeAt(0);
    // address.forEach(x => {
    //     control.push(
    //         this.fb.group({
    //         city: [x.city]
    //        })
    //     );
    //   })

    //2nd Way
    this.address.removeAt(0);
    this.address.controls.splice(0);
    address.forEach(x => {
            this.address.push(
                this.fb.group({
                city: [x.city]
              })
            );
          });
    
    // for ( let ads of address){
    //     let control = <FormArray>this.userForm.controls.address;
    //     control.push(
    //         this.fb.group({
    //         city: [ads.city]
    //        })
    //     );
    //     this.fb.array.push([
    //        this.fb.group({
    //         expense_category_id: [expenseCategories.expense_category_id, Validators.required],
    //         amount: [expenseCategories.amount_cents]
    //       ])
    //     });
    //   }
  //}
}

  resetForm(event:Event){
    event.preventDefault();
    this.address.controls.splice(1,this.address.controls.length);
    this.userForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { DeliveryService } from 'src/app/services/address/delivery.service';
import { MessageService } from 'src/app/services/message/message.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {

  add_to_cart: any;
  totalItems: number = 0;

  addressForm: FormGroup;

  constructor(private product: ProductService, private message: MessageService, 
    private formBuilder: FormBuilder, private deliveryService: DeliveryService) { 

    this.addressForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      isDefault: [true, [Validators.required]]
    })

    this.product.getCartItems().subscribe((response) => {
      this.add_to_cart = response['data']['cartProducts'];
      this.totalItems = this.add_to_cart.length;
    },
    (err) => {
      console.log(err);
    }
    )
  }

  deleteCart(id: number) {
    const c = confirm("Are you sure you want to delete this cart item?")
    if (c) {
      this.product.deleteCartItems(id).subscribe((response) => {
        this.message.successMessage("Cart Item Removed Successfully!!!");

        this.product.getCartItems().subscribe((response) => {
          this.add_to_cart = response['data']['cartProducts'];
          this.totalItems = this.add_to_cart.length;
        },
        (err) => {
          console.log(err);
        })

      })
    }
  }

  increaseQuantity(id: number) {
    let quantity: number = 0;
    const items = this.add_to_cart;
    for(let i of items) {
      if(i.id == id) {
        quantity = i.quantity + 1;
        this.product.updateQuantity(id, quantity).subscribe((response) => {
          this.product.getCartItems().subscribe((response) => {
            this.add_to_cart = response['data']['cartProducts'];
            this.totalItems = this.add_to_cart.length;
          },
          (err) => {
            console.log(err);
          })
        })
      }
    }
  }

  decreaseQuantity(id: number) {
    let quantity: number = 0;
    const items = this.add_to_cart;
    for(let i of items) {
      if(i.id == id) {
        if (i.quantity > 1) {
          quantity = i.quantity - 1;
          this.product.updateQuantity(id, quantity).subscribe((response) => {
            this.product.getCartItems().subscribe((response) => {
            this.add_to_cart = response['data']['cartProducts'];
            this.totalItems = this.add_to_cart.length;
          },
          (err) => {
            console.log(err);
          })
        })
        }
      }
    }
  }

  // addLocation() {
  //   if(this.addressForm.valid) {
  //     this.deliveryService.addAddress(this.addressForm.value).subscribe((response) => {
  //       this.message.successMessage("Location Added Successfully")
  //     },
  //     (err) => {
  //       const error = err.error['errors'];
        
  //       for(let e in error){
  //         this.message.errorMessage(error[e].title , error[e].message);
  //       }
  //     })
  //   }
  // }

  ngOnInit(): void {
  }

}

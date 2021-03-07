import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./user/signin";

import Menu from "./core/Menu";
import Cart from "./core/Cart";

import AdminPage from "./admin/AdminPage";
import ManageCategory from './admin/category/ManageCategory';
import UpdateCategory from "../src/admin/category/UpdateCategory";

import AddMenu from "../src/admin/Menu/AddProduct";
import ManageMenu from './admin/Menu/ManageProduct'
import UpdateMenu from "../src/admin/Menu/UpdateProduct";

import Adminpromotion from "../src/admin/promotion/Adminpromotion";
import Managepromotion from './admin/promotion/Managepromotion';
import Updatepromotion from './admin/promotion/Updatepromotion';

import ManageUsers from "./admin/user/ManageUser";
import UpdateUser from "./admin/user/UpdateUser";

import ManageTable from './admin/table/ManageTable'
import UpdateTable from './admin/table/UpdateTable'

import AdminRoute from "./auth/AdminRoute";
import MenuRoute from "./auth/MenuRoute";
import CartRoute from './auth/CartRoute'

import Report from './admin/Report/Report'
import saleReport from './admin/Report/saleReport'



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <AdminRoute path="/admin" exact component={AdminPage} />

        <AdminRoute path="/Manage/users" exact component={ManageUsers} />
        <AdminRoute
          path="/Manage/user/update/:userId"
          exact
          component={UpdateUser}
        />
        
        <AdminRoute 
          path="/create/product" 
          exact 
          component={AddMenu} />
        <AdminRoute
          path="/Manage/menu"
          exact
          component={ManageMenu}
        />
        <AdminRoute
          path="/Manage/menu/update/:productId"
          exact
          component={UpdateMenu}
        />

          <AdminRoute 
          path="/create/promotion" 
          exact 
          component={Adminpromotion} />
            <AdminRoute 
          path="/Manage/promotion" 
          exact 
          component={Managepromotion} />
               <AdminRoute 
          path="/Manage/promotion/update/:promotionId" 
          exact 
          component={Updatepromotion} />


        <AdminRoute
          path="/Manage/category"
          exact
          component={ManageCategory}
        />
        <AdminRoute
          path="/Manage/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
      
        <AdminRoute
          path="/Manage/table"
          exact
          component={ManageTable}
        />
        <AdminRoute
          path="/Manage/table/update/:tableId"
          exact
          component={UpdateTable}
        />
        <AdminRoute
          path="/Report/bestseller"
          exact
          component={Report}
        />
        <AdminRoute
          path="/Report/saleReport"
          exact
          component={saleReport}
        />
     
        <CartRoute path="/cart/:tableId" exact component={Cart} />
        <MenuRoute path="/Menu/:tableId" exact component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

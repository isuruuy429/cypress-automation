/*
 * Copyright (c) 2022, WSO2 Inc. (http://www.wso2.com).
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the
 * ); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 *
 *  BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

class add_remove_elements {
  add_element = "button[onclick='addElement()']";
  delete_element = "button[onclick='deleteElement()']";
  h3 = "h3";

  get_addElement() {
    return cy.get(this.add_element);
  }

  get_deleteElemment() {
    return cy.get(this.delete_element);
  }

  get_header() {
    return cy.get(this.h3);
  }
}

export default add_remove_elements;

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div style="margin-top:60px">
  <div v-if="loading" class="flex justify-center">Loading...</div>
  <div
    v-else
    class="rounded rounded-lg px-2 py-3 bg-gray-200 shadow overflow-hidden sm:rounded-lg"
  >
    <div class="flex justify-center">
      <div class="lg:hidden sm:flex">
        <div class="mt-1 flex items-center">
          <div v-if="userImage.avatar_url">
            <img
              :src="userImage.avatar_url"
              alt=""
              class="object-cover"
              style="border-radius: 80px; width: 130px; height: 130px"
            />
          </div>
          <div v-else-if="userImage.avatar">
            <img
              :src="config.urlink + userImage.avatar"
              :alt="userImage.name"
              class="w-full mx-auto object-fill outline outline-connekta-main mb-3"
              style="border-radius: 80px; width: 150px; height: 150px"
            />
          </div>
          <div v-else>
            <span
              class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
            >
              <svg
                class="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="rounded overflow-hidden">
        <!-- accordion-tab  -->
        <div
          class="opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="1"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus: text-connekta-main transition ease duration-500"
            >
              Manage Basic Information
            </div>
           
          </div>
          <div
            style="height: 100%"
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 ease duration-500"
          >
            <form @submit.prevent="updateBasicProfile">
              <div
                class="mt-3 flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                v-if="Object.keys(errors).length"
              >
                <div v-for="(field, i) of Object.keys(errors)" :key="i">
                  <div v-for="(error, ind) of errors[field] || []" :key="ind">
                    * {{ error }}
                  </div>
                </div>
              </div>

            
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">Available Connects</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ userForm.connects }}c
                  </dd>
                </div>

              <div class="border-t border-gray-200">
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      v-model="userForm.name"
                      type="text"
                    />
                  </dd>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Date of birth
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      v-model="userForm.dob"
                      type="date"
                    />
                  </dd>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Country
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    
                    <!-- country codes (ISO 3166) and Dial codes. -->
                    <select 
                    v-model="userForm.country_code"
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="countryCode" id="">
                      <option value="234" Selected>Nigeria (+234)</option>
                      <optgroup label="Other countries">
                        <option  value="213">Algeria (+213)</option>
                        <option  value="376">Andorra (+376)</option>
                        <option value="244">Angola (+244)</option>
                        <option value="1264">Anguilla (+1264)</option>
                        <option value="1268">Antigua &amp; Barbuda (+1268)</option>
                        <option value="54">Argentina (+54)</option>
                        <option value="374">Armenia (+374)</option>
                        <option value="297">Aruba (+297)</option>
                        <option value="61">Australia (+61)</option>
                        <option value="43">Austria (+43)</option>
                        <option value="994">Azerbaijan (+994)</option>
                        <option value="1242">Bahamas (+1242)</option>
                        <option value="973">Bahrain (+973)</option>
                        <option value="880">Bangladesh (+880)</option>
                        <option value="1246">Barbados (+1246)</option>
                        <option value="375">Belarus (+375)</option>
                        <option value="32">Belgium (+32)</option>
                        <option value="501">Belize (+501)</option>
                        <option value="229">Benin (+229)</option>
                        <option value="1441">Bermuda (+1441)</option>
                        <option value="975">Bhutan (+975)</option>
                        <option value="591">Bolivia (+591)</option>
                        <option value="387">Bosnia Herzegovina (+387)</option>
                        <option value="267">Botswana (+267)</option>
                        <option value="55">Brazil (+55)</option>
                        <option value="673">Brunei (+673)</option>
                        <option value="359">Bulgaria (+359)</option>
                        <option value="226">Burkina Faso (+226)</option>
                        <option value="257">Burundi (+257)</option>
                        <option value="855">Cambodia (+855)</option>
                        <option value="237">Cameroon (+237)</option>
                        <option value="1">Canada (+1)</option>
                        <option value="238">Cape Verde Islands (+238)</option>
                        <option value="1345">Cayman Islands (+1345)</option>
                        <option value="236">Central African Republic (+236)</option>
                        <option value="56">Chile (+56)</option>
                        <option value="86">China (+86)</option>
                        <option value="57">Colombia (+57)</option>
                        <option value="269">Comoros (+269)</option>
                        <option value="242">Congo (+242)</option>
                        <option value="682">Cook Islands (+682)</option>
                        <option value="506">Costa Rica (+506)</option>
                        <option value="385">Croatia (+385)</option>
                        <option value="53">Cuba (+53)</option>
                        <option value="90392">Cyprus North (+90392)</option>
                        <option value="357">Cyprus South (+357)</option>
                        <option value="42">Czech Republic (+42)</option>
                        <option value="45">Denmark (+45)</option>
                        <option value="253">Djibouti (+253)</option>
                        <option value="1809">Dominica (+1809)</option>
                        <option value="1809">Dominican Republic (+1809)</option>
                        <option value="593">Ecuador (+593)</option>
                        <option value="20">Egypt (+20)</option>
                        <option value="503">El Salvador (+503)</option>
                        <option value="240">Equatorial Guinea (+240)</option>
                        <option value="291">Eritrea (+291)</option>
                        <option value="372">Estonia (+372)</option>
                        <option value="251">Ethiopia (+251)</option>
                        <option value="500">Falkland Islands (+500)</option>
                        <option value="298">Faroe Islands (+298)</option>
                        <option value="679">Fiji (+679)</option>
                        <option value="358">Finland (+358)</option>
                        <option value="33">France (+33)</option>
                        <option value="594">French Guiana (+594)</option>
                        <option value="689">French Polynesia (+689)</option>
                        <option value="241">Gabon (+241)</option>
                        <option value="220">Gambia (+220)</option>
                        <option value="7880">Georgia (+7880)</option>
                        <option value="49">Germany (+49)</option>
                        <option value="233">Ghana (+233)</option>
                        <option value="350">Gibraltar (+350)</option>
                        <option value="30">Greece (+30)</option>
                        <option  value="299">Greenland (+299)</option>
                        <option value="1473">Grenada (+1473)</option>
                        <option value="590">Guadeloupe (+590)</option>
                        <option value="671">Guam (+671)</option>
                        <option value="502">Guatemala (+502)</option>
                        <option value="224">Guinea (+224)</option>
                        <option value="245">Guinea - Bissau (+245)</option>
                        <option value="592">Guyana (+592)</option>
                        <option value="509">Haiti (+509)</option>
                        <option value="504">Honduras (+504)</option>
                        <option value="852">Hong Kong (+852)</option>
                        <option value="36">Hungary (+36)</option>
                        <option value="354">Iceland (+354)</option>
                        <option value="91">India (+91)</option>
                        <option value="62">Indonesia (+62)</option>
                        <option value="98">Iran (+98)</option>
                        <option value="964">Iraq (+964)</option>
                        <option value="353">Ireland (+353)</option>
                        <option value="972">Israel (+972)</option>
                        <option value="39">Italy (+39)</option>
                        <option value="1876">Jamaica (+1876)</option>
                        <option value="81">Japan (+81)</option>
                        <option value="962">Jordan (+962)</option>
                        <optiion value="7">Kazakhstan (+7)</optiion>
                        <option value="254">Kenya (+254)</option>
                        <option value="686">Kiribati (+686)</option>
                        <option value="850">Korea North (+850)</option>
                        <option value="82">Korea South (+82)</option>
                        <option value="965">Kuwait (+965)</option>
                        <option value="996">Kyrgyzstan (+996)</option>
                        <option value="856">Laos (+856)</option>
                        <option value="371">Latvia (+371)</option>
                        <option value="961">Lebanon (+961)</option>
                        <option value="266">Lesotho (+266)</option>
                        <option value="231">Liberia (+231)</option>
                        <option value="218">Libya (+218)</option>
                        <option value="417">Liechtenstein (+417)</option>
                        <option value="370">Lithuania (+370)</option>
                        <option value="352">Luxembourg (+352)</option>
                        <option value="853">Macao (+853)</option>
                        <option value="389">Macedonia (+389)</option>
                        <option value="261">Madagascar (+261)</option>
                        <option value="265">Malawi (+265)</option>
                        <option value="60">Malaysia (+60)</option>
                        <option value="960">Maldives (+960)</option>
                        <option value="223">Mali (+223)</option>
                        <option value="356">Malta (+356)</option>
                        <option value="692">Marshall Islands (+692)</option>
                        <option value="596">Martinique (+596)</option>
                        <option value="222">Mauritania (+222)</option>
                        <option value="269">Mayotte (+269)</option>
                        <option value="52">Mexico (+52)</option>
                        <option value="691">Micronesia (+691)</option>
                        <option value="373">Moldova (+373)</option>
                        <option value="377">Monaco (+377)</option>
                        <option value="976">Mongolia (+976)</option>
                        <option value="1664">Montserrat (+1664)</option>
                        <option value="212">Morocco (+212)</option>
                        <option value="258">Mozambique (+258)</option>
                        <option value="95">Myanmar (+95)</option>
                        <option  value="264">Namibia (+264)</option>
                        <option value="674">Nauru (+674)</option>
                        <option  value="977">Nepal (+977)</option>
                        <option  value="31">Netherlands (+31)</option>
                        <option  value="687">New Caledonia (+687)</option>
                        <option  value="64">New Zealand (+64)</option>
                        <option  value="505">Nicaragua (+505)</option>
                        <option value="227">Niger (+227)</option>
                        <!-- <option value="234">Nigeria (+234)</option> -->
                        <option value="683">Niue (+683)</option>
                        <option value="672">Norfolk Islands (+672)</option>
                        <option value="670">Northern Marianas (+670)</option>
                        <option value="47">Norway (+47)</option>
                        <option value="968">Oman (+968)</option>
                        <option value="680">Palau (+680)</option>
                        <option value="507">Panama (+507)</option>
                        <option value="675">Papua New Guinea (+675)</option>
                        <option value="595">Paraguay (+595)</option>
                        <option value="51">Peru (+51)</option>
                        <option value="63">Philippines (+63)</option>
                        <option value="48">Poland (+48)</option>
                        <option value="351">Portugal (+351)</option>
                        <option value="1787">Puerto Rico (+1787)</option>
                        <option  value="974">Qatar (+974)</option>
                        <option  value="262">Reunion (+262)</option>
                        <option  value="40">Romania (+40)</option>
                        <option  value="7">Russia (+7)</option>
                        <option  value="250">Rwanda (+250)</option>
                        <option  value="378">San Marino (+378)</option>
                        <option value="239">Sao Tome &amp; Principe (+239)</option>
                        <option  value="966">Saudi Arabia (+966)</option>
                        <option  value="221">Senegal (+221)</option>
                        <option  value="381">Serbia (+381)</option>
                        <option  value="248">Seychelles (+248)</option>
                        <option value="232">Sierra Leone (+232)</option>
                        <option value="65">Singapore (+65)</option>
                        <option value="421">Slovak Republic (+421)</option>
                        <option  value="386">Slovenia (+386)</option>
                        <option  value="677">Solomon Islands (+677)</option>
                        <option  value="252">Somalia (+252)</option>
                        <option value="27">South Africa (+27)</option>
                        <option value="34">Spain (+34)</option>
                        <option value="94">Sri Lanka (+94)</option>
                        <option  value="290">St. Helena (+290)</option>
                        <option  value="1869">St. Kitts (+1869)</option>
                        <option value="1758">St. Lucia (+1758)</option>
                        <option value="249">Sudan (+249)</option>
                        <option value="597">Suriname (+597)</option>
                        <option value="268">Swaziland (+268)</option>
                        <option  value="46">Sweden (+46)</option>
                        <option  value="41">Switzerland (+41)</option>
                        <option value="963">Syria (+963)</option>
                        <option value="886">Taiwan (+886)</option>
                        <option  value="7">Tajikstan (+7)</option>
                        <option  value="66">Thailand (+66)</option>
                        <option  value="228">Togo (+228)</option>
                        <option value="676">Tonga (+676)</option>
                        <option value="1868">Trinidad &amp; Tobago (+1868)</option>
                        <option  value="216">Tunisia (+216)</option>
                        <option  value="90">Turkey (+90)</option>
                        <option  value="7">Turkmenistan (+7)</option>
                        <option  value="993">Turkmenistan (+993)</option>
                        <option  value="1649">Turks &amp; Caicos Islands (+1649)</option>
                        <option  value="688">Tuvalu (+688)</option>
                        <option  value="256">Uganda (+256)</option>
                        <option  value="44">UK (+44)</option>
                        <option value="380">Ukraine (+380)</option>
                        <option  value="971">United Arab Emirates (+971)</option>
                        <option value="598">Uruguay (+598)</option>
                        <option value="1">USA (+1)</option>
                        <option value="7">Uzbekistan (+7)</option>
                        <option  value="678">Vanuatu (+678)</option>
                        <option  value="379">Vatican City (+379)</option>
                        <option value="58">Venezuela (+58)</option>
                        <option value="84">Vietnam (+84)</option>
                        <option  value="84">Virgin Islands - British (+1284)</option>
                        <option value="84">Virgin Islands - US (+1340)</option>
                        <option value="681">Wallis &amp; Futuna (+681)</option>
                        <option  value="969">Yemen (North)(+969)</option>
                        <option  value="967">Yemen (South)(+967)</option>
                        <option  value="260">Zambia (+260)</option>
                        <option  value="263">Zimbabwe (+263)</option>
                      </optgroup>
                    </select>


                  </dd>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500"></dt>

                  <p>
                  City: {{ userForm.city }}
                  </p>

                  <select
                    v-model="userForm.city"
                    id="area"
                    name="area"
                    autocomplete="area"
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                   <option v-for="area in areas" :key="area.id">{{ area.city }}</option>
                  
                  
                  </select>
                </div>

                <div
                  class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="number"
                      v-model="userForm.phone"
                    />
                  </dd>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ userForm.email }}
                  </dd>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Interested In
                  </dt>
                  
                  <select
                    v-model="userForm.gender_interested"
                    id="gender_interested"
                    name="gender_interested"
                    autocomplete="gender_interested"
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">--Interested in--</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">Belief</dt>
                  <select
                    v-model="userForm.belief"
                    id="belief"
                    name="belief"
                    autocomplete="belief"
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">--Choose Belief--</option>
                    <option value="christianity">Christainity</option>
                    <option value="moslem">Moslem</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">Tribe</dt>
                  <select
                    v-model="userForm.tribe"
                    id="tribe"
                    name="tribe"
                    autocomplete="tribe"
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">--Choose Tribe--</option>
                    <option value="yoruba">Yoruba</option>
                    <option value="igbo">Igbo</option>
                    <option value="hausa">Hausa</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">Hobbies</dt>
                  <VueMultiselect
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="userForm.hobbies"
                    :multiple="true"
                    :options="options"
                    :searchable="searchable"
                  >
                    <span slot="noResult">
                      Oops! No elements found. Consider changing the search
                      query.
                    </span>
                  </VueMultiselect>
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Hook up Price
                  </dt>
                  <input
                    class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    v-model="userForm.hook_price"
                    type="text"
                  />
                </div>

                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">About</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <textarea
                      class="shadow appearance-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      rows="4"
                      cols="100"
                      v-model="userForm.description"
                    />
                  </dd>
                </div>
              </div>

              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    class="h-5 w-5 text-white-500 group-hover:text-white-400"
                    aria-hidden="true"
                  />
                </span>
                Save
              </button>
            </form>
          </div>
        </div>
        <!-- accordion-tab -->
        <br />
        <!-- accordion-tab  -->
        <div
          class="opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="2"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus:text-connekta-main transition ease duration-500"
            >
              Manage Profile Picture
            </div>
           
          </div>
          <div
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 overflow-hidden ease duration-500"
          >
            <form
              @submit.prevent="updateProfilePicture"
              enctype="multipart/form-data"
            >
              <div
                class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                v-if="Object.keys(errors).length"
              >
                <div v-for="(field, i) of Object.keys(errors)" :key="i">
                  <div v-for="(error, ind) of errors[field] || []" :key="ind">
                    * {{ error }}
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div
                    class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt class="text-sm font-medium text-gray-500">
                      Profile Picture
                    </dt>

                    <button
                      type="button"
                      class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <input
                        type="file"
                        @change="onPhotoChoose"
                        class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      Select/Change
                    </button>
                  </div>
                </dl>
              </div>

              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    class="h-5 w-5 text-white-500 group-hover:text-white-400"
                    aria-hidden="true"
                  />
                </span>
                Save Picture
              </button>
            </form>
          </div>
        </div>
        <!-- accordion-tab -->

        <!-- accordion-tab  -->
        <div
          class="mt-3 opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="3"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus:text-connekta-main transition ease duration-500"
            >
              Manage Gallery Photos(Photo 1)
            </div>
           
          </div>
          <div
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 overflow-hidden ease duration-500"
          >
          <div
            v-for="pix in firstPic" :key="pix.id"  
            class="bg-gray-200 px-4"
            >
                <form
                @submit.prevent="updateFirstPicture"
                enctype="multipart/form-data"
              >
            <div
                  class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                  v-if="Object.keys(errors).length"
                >
                  <div v-for="(field, i) of Object.keys(errors)" :key="i">
                    <div v-for="(error, ind) of errors[field] || []" :key="ind">
                      * {{ error }}
                    </div>
                  </div>
                </div>

                <div  class="mt-1 flex items-center">
            <div v-if="firstImage.avatar_url">
              <img
                :src="firstImage.avatar_url"
                alt=""
                class="object-cover"
                style="border-radius: 80px; width: 130px; height: 130px"
              />
            </div>
            <div class="px-2 py-3" v-else-if="pix.image">
              <img
                :src="config.urlink + pix.image"
                alt=""
                class="w-full mx-auto object-fill outline outline-gray-200 mb-3"
                style="border-radius: 80px; width: 150px; height: 150px"
              />
            </div>
            <div v-else>
              <span
                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>


                <div class="border-t border-gray-200">
                  <dl>
                    <div
                      class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        First Picture
                      </dt>

                      <button
                        type="button"
                        class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <input
                          type="file"
                          @change="onFirstPhotoChoose"
                          class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        Update Picture
                      </button>
                      
                      

                    </div>
                  </dl>
                </div>

                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                
                  Update Picture
                </button>
              </form>
          </div>

          </div>
        </div>
        <!-- accordion-tab -->

        <!-- accordion-tab  -->
        <div
          class="mt-3 opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="4"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus:text-connekta-main transition ease duration-500"
            >
              Manage Gallery Photos(Photo 2)
            </div>
           
          </div>
          <div
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 overflow-hidden ease duration-500"
          >
          <div
            v-for="pix in secondPic" :key="pix.id"  
            class="bg-gray-200 px-4"
            >
                <form
                @submit.prevent="updateSecondPicture"
                enctype="multipart/form-data"
              >
            <div
                  class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                  v-if="Object.keys(errors).length"
                >
                  <div v-for="(field, i) of Object.keys(errors)" :key="i">
                    <div v-for="(error, ind) of errors[field] || []" :key="ind">
                      * {{ error }}
                    </div>
                  </div>
                </div>

                <div  class="mt-1 flex items-center">
            <div v-if="secondImage.avatar_url">
              <img
                :src="secondImage.avatar_url"
                alt=""
                class="object-cover"
                style="border-radius: 80px; width: 130px; height: 130px"
              />
            </div>
            <div class="px-2 py-3" v-else-if="pix.image">
              <img
                :src="config.urlink + pix.image"
                alt=""
                class="w-full mx-auto object-fill outline outline-gray-200 mb-3"
                style="border-radius: 80px; width: 150px; height: 150px"
              />
            </div>
            <div v-else>
              <span
                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>


                <div class="border-t border-gray-200">
                  <dl>
                    <div
                      class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Second Picture
                      </dt>

                      <button
                        type="button"
                        class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <input
                          type="file"
                          @change="onSecondPhotoChoose"
                          class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        Update Picture
                      </button>
                      
                      

                    </div>
                  </dl>
                </div>

                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                
                  Update Picture
                </button>
              </form>
          </div>

          </div>
        </div>
        <!-- accordion-tab -->

        <!-- accordion-tab  -->
        <div
          class="mt-3 opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="5"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus:text-connekta-main transition ease duration-500"
            >
              Manage Gallery Photos(Photo 3)
            </div>
           
          </div>
          <div
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 overflow-hidden ease duration-500"
          >
          <div
            v-for="pix in thirdPic" :key="pix.id"  
            class="bg-gray-200 px-4"
            >
                <form
                @submit.prevent="updateThirdPicture"
                enctype="multipart/form-data"
              >
            <div
                  class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                  v-if="Object.keys(errors).length"
                >
                  <div v-for="(field, i) of Object.keys(errors)" :key="i">
                    <div v-for="(error, ind) of errors[field] || []" :key="ind">
                      * {{ error }}
                    </div>
                  </div>
                </div>

                <div  class="mt-1 flex items-center">
            <div v-if="thirdImage.avatar_url">
              <img
                :src="thirdImage.avatar_url"
                alt=""
                class="object-cover"
                style="border-radius: 80px; width: 130px; height: 130px"
              />
            </div>
            <div class="px-2 py-3" v-else-if="pix.image">
              <img
                :src="config.urlink + pix.image"
                alt=""
                class="w-full mx-auto object-fill outline outline-gray-200 mb-3"
                style="border-radius: 80px; width: 150px; height: 150px"
              />
            </div>
            <div v-else>
              <span
                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>


                <div class="border-t border-gray-200">
                  <dl>
                    <div
                      class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Third Picture
                      </dt>

                      <button
                        type="button"
                        class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <input
                          type="file"
                          @change="onThirdPhotoChoose"
                          class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        Update Picture
                      </button>
                      
                      

                    </div>
                  </dl>
                </div>

                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                
                  Update Picture
                </button>
              </form>
          </div>

          </div>
        </div>
        <!-- accordion-tab -->

        <!-- accordion-tab  -->
        <div
          class="mt-3 opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="6"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus:text-connekta-main transition ease duration-500"
            >
              Manage Gallery Photos(Photo 4)
            </div>
           
          </div>
          <div
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 overflow-hidden ease duration-500"
          >
          <div
            v-for="pix in fourthPic" :key="pix.id"  
            class="bg-gray-200 px-4"
            >
                <form
                @submit.prevent="updateFourthPicture"
                enctype="multipart/form-data"
              >
            <div
                  class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                  v-if="Object.keys(errors).length"
                >
                  <div v-for="(field, i) of Object.keys(errors)" :key="i">
                    <div v-for="(error, ind) of errors[field] || []" :key="ind">
                      * {{ error }}
                    </div>
                  </div>
                </div>

                <div  class="mt-1 flex items-center">
            <div v-if="fourthImage.avatar_url">
              <img
                :src="fourthImage.avatar_url"
                alt=""
                class="object-cover"
                style="border-radius: 80px; width: 130px; height: 130px"
              />
            </div>
            <div class="px-2 py-3" v-else-if="pix.image">
              <img
                :src="config.urlink + pix.image"
                alt=""
                class="w-full mx-auto object-fill outline outline-gray-200 mb-3"
                style="border-radius: 80px; width: 150px; height: 150px"
              />
            </div>
            <div v-else>
              <span
                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>


                <div class="border-t border-gray-200">
                  <dl>
                    <div
                      class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Fourth Picture
                      </dt>

                      <button
                        type="button"
                        class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <input
                          type="file"
                          @change="onFourthPhotoChoose"
                          class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        Update Picture
                      </button>
                      
                      

                    </div>
                  </dl>
                </div>

                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                
                  Update Picture
                </button>
              </form>
          </div>

          </div>
        </div>
        <!-- accordion-tab -->

        <!-- accordion-tab  -->
        <div
          class="mt-3 opacity-0 animate-fade-in-down group outline-none accordion-section"
          tabindex="7"
        >
          <div
            class="group bg-lime-100 flex justify-between px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div
              class="group-focus:text-connekta-main transition ease duration-500"
            >
              Manage Gallery Photos(Photo 5)
            </div>
           
          </div>
          <div
            class="group-focus:max-h-full max-h-full bg-gray-200 px-4 overflow-hidden ease duration-500"
          >
          <div
            v-for="pix in fifthPic" :key="pix.id"  
            class="bg-gray-200 px-4"
            >
                <form
                @submit.prevent="updateFifthPicture"
                enctype="multipart/form-data"
              >
            <div
                  class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                  v-if="Object.keys(errors).length"
                >
                  <div v-for="(field, i) of Object.keys(errors)" :key="i">
                    <div v-for="(error, ind) of errors[field] || []" :key="ind">
                      * {{ error }}
                    </div>
                  </div>
                </div>

                <div  class="mt-1 flex items-center">
            <div v-if="fifthImage.avatar_url">
              <img
                :src="fifthImage.avatar_url"
                alt=""
                class="object-cover"
                style="border-radius: 80px; width: 130px; height: 130px"
              />
            </div>
            <div class="px-2 py-3" v-else-if="pix.image">
              <img
                :src="config.urlink + pix.image"
                alt=""
                class="w-full mx-auto object-fill outline outline-gray-200 mb-3"
                style="border-radius: 80px; width: 150px; height: 150px"
              />
            </div>
            <div v-else>
              <span
                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>


                <div class="border-t border-gray-200">
                  <dl>
                    <div
                      class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Fifth Picture
                      </dt>

                      <button
                        type="button"
                        class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <input
                          type="file"
                          @change="onFifthPhotoChoose"
                          class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        Update Picture
                      </button>
                      
                      

                    </div>
                  </dl>
                </div>

                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                
                  Update Picture
                </button>
              </form>
          </div>

          </div>
        </div>
        <!-- accordion-tab -->
      </div>
    </div>
</div>
 
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from "vue";
import store from "../store";
import VueMultiselect from "vue-multiselect";
import config from "../config.js";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

let email = ref("");
let loading = ref("false");
const errors = ref({});

const options = config.hobbies;

const userForm = ref({
  name: "",
  city: "",
  dob: "",
  belief: "",
  country_code: "",
  hobbies: null,
  tribe: "",
  phone: "",
  hook_price: "",
  description: "",
  gender_interested: "",
});

const area = ref({
  id: ''
})

const userImage = ref({
  avatar: null,
  avatar_url: null,
});

const firstImage = ref({
  avatar: null,
  avatar_url: null,
});

const secondImage = ref({
  avatar: null,
  avatar_url: null,
});

const thirdImage = ref({
  avatar: null,
  avatar_url: null,
});

const fourthImage = ref({
  avatar: null,
  avatar_url: null,
});

const fifthImage = ref({
  avatar: null,
  avatar_url: null,
});

watch(
  () => store.state.users.user.data,
  (newVal, oldVal) => {
    userForm.value = {
      ...JSON.parse(JSON.stringify(newVal)),
      status: !!newVal.status,
    };
    userImage.value = {
      ...JSON.parse(JSON.stringify(newVal)),
      status: !!newVal.status,
    };
  }
);

const historys = computed(() => store.state.hookers.history.data);
const hobby = computed(() => store.state.hobby.hobby.data);
const firstPic = computed(() => store.state.gallery.gallery.data.first);
const secondPic = computed(() => store.state.gallery.gallery.data.second);
const thirdPic = computed(() => store.state.gallery.gallery.data.third);
const fourthPic = computed(() => store.state.gallery.gallery.data.fourth);
const fifthPic = computed(() => store.state.gallery.gallery.data.fifth);

store.dispatch("hookers/getHistory");

store.dispatch("gallery/getPics");

const user = computed(() => store.state.users.user.data);

const areas = computed(() => store.state.users.area.data);

store.dispatch("users/getUser");

store.dispatch("users/getArea");

function getUser() {
  loading.value = true;
  store.dispatch("users/getUser").then(() => {
    loading.value = false;
  });
}

onMounted(() => {
  getUser();
});

userForm.value = user;
userImage.value = user;

function onPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    userImage.value.avatar = reader.result;
    userImage.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

function onFirstPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    firstImage.value.avatar = reader.result;
    firstImage.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

function onSecondPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    secondImage.value.avatar = reader.result;
    secondImage.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

function onThirdPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    thirdImage.value.avatar = reader.result;
    thirdImage.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

function onFourthPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    fourthImage.value.avatar = reader.result;
    fourthImage.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

function onFifthPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    fifthImage.value.avatar = reader.result;
    fifthImage.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

function updateBasicProfile() {
  store
    .dispatch("users/updateBasicProfile", { ...userForm.value })
    .then(({ data }) => {
      store.commit("notify", {
        type: "success",
        message: "Your Profile was successfully updated",
      });

      store.dispatch("users/getUser");
      router.push({ name: "Profile" });
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}

function updateProfilePicture() {
  Swal.fire({
    title: "Profile Picture",
    text: "Do you want to make the above image your profile picture?",
    imageUrl: userImage.value.avatar_url,
    imageWidth: 150,
    imageHeight: 250,
    imageAlt: "Profile Image",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#8b0000",
    reverseButtons: true,
  })
    .then((result) => {
      if (result.value) {
        store
          .dispatch("users/updateProfilePicture", { ...userImage.value })
          .then(({ data }) => {
            store.commit("notify", {
              type: "success",
              message: "Your Profile Picture was successfully updated",
            });

            store.dispatch("users/getUser");
            router.push({ name: "Profile" });
          });
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}

function updateFirstPicture() {
  Swal.fire({
    title: "first Picture",
    text: "Do you want to make the above image your first picture?",
    imageUrl: firstImage.value.avatar_url,
    imageWidth: 150,
    imageHeight: 250,
    imageAlt: "first Image",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#8b0000",
    reverseButtons: true,
  })
    .then((result) => {
      if (result.value) {
        store
          .dispatch("gallery/updateFirstPicture", { ...firstImage.value })
          .then(({ data }) => {
            store.commit("notify", {
              type: "success",
              message: "Your first Picture was successfully updated",
            });

            store.dispatch("gallery/getPics");
            router.push({ name: "Profile" });
          });
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}

function updateSecondPicture() {
  Swal.fire({
    title: "Gallery Picture",
    text: "Do you want to make the above image your second picture?",
    imageUrl: secondImage.value.avatar_url,
    imageWidth: 150,
    imageHeight: 250,
    imageAlt: "second Image",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#8b0000",
    reverseButtons: true,
  })
    .then((result) => {
      if (result.value) {
        store
          .dispatch("gallery/updateSecondPicture", { ...secondImage.value })
          .then(({ data }) => {
            store.commit("notify", {
              type: "success",
              message: "Your Picture was successfully updated",
            });

            store.dispatch("gallery/getPics");
            router.push({ name: "Profile" });
          });
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}

function updateThirdPicture() {
  Swal.fire({
    title: "Gallery Picture",
    text: "Do you want to make the above image your third picture?",
    imageUrl: thirdImage.value.avatar_url,
    imageWidth: 150,
    imageHeight: 250,
    imageAlt: "Third Image",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#8b0000",
    reverseButtons: true,
  })
    .then((result) => {
      if (result.value) {
        store
          .dispatch("gallery/updateThirdPicture", { ...thirdImage.value })
          .then(({ data }) => {
            store.commit("notify", {
              type: "success",
              message: "Your Picture was successfully updated",
            });

            store.dispatch("gallery/getPics");
            router.push({ name: "Profile" });
          });
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}

function updateFourthPicture() {
  Swal.fire({
    title: "fourth Picture",
    text: "Do you want to make the above image your fourth picture?",
    imageUrl: fourthImage.value.avatar_url,
    imageWidth: 150,
    imageHeight: 250,
    imageAlt: "fourth Image",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#8b0000",
    reverseButtons: true,
  })
    .then((result) => {
      if (result.value) {
        store
          .dispatch("gallery/updateFourthPicture", { ...fourthImage.value })
          .then(({ data }) => {
            store.commit("notify", {
              type: "success",
              message: "Your Picture was successfully updated",
            });

            store.dispatch("gallery/getPics");
            router.push({ name: "Profile" });
          });
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}

function updateFifthPicture() {
  Swal.fire({
    title: "fifth Picture",
    text: "Do you want to make the above image your fifth picture?",
    imageUrl: fifthImage.value.avatar_url,
    imageWidth: 150,
    imageHeight: 250,
    imageAlt: "fifth Image",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#8b0000",
    reverseButtons: true,
  })
    .then((result) => {
      if (result.value) {
        store
          .dispatch("gallery/updateFifthPicture", { ...fifthImage.value })
          .then(({ data }) => {
            store.commit("notify", {
              type: "success",
              message: "Your Picture was successfully updated",
            });

            store.dispatch("gallery/getPics");
            router.push({ name: "Profile" });
          });
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}


</script>
<style src="vue-multiselect/dist/vue-multiselect.css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap");
body {
  font-family: "Rubik", sans-serif;
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details {
  display: block;
}
summary {
  display: list-item;
}
[hidden],
template {
  display: none;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
button {
  background-color: transparent;
  background-image: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
fieldset,
ol,
ul {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
}
hr {
  border-top-width: 1px;
}
img {
  border-style: solid;
}
textarea {
  resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #a0aec0;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #a0aec0;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #a0aec0;
}
input::placeholder,
textarea::placeholder {
  color: #a0aec0;
}
[role="button"],
button {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
.bg-gray-100 {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}
.bg-gray-800 {
  --bg-opacity: 1;
  background-color: #2d3748;
  background-color: rgba(45, 55, 72, var(--bg-opacity));
}
.bg-gray-900 {
  --bg-opacity: 1;
  background-color: #1a202c;
  background-color: rgba(26, 32, 44, var(--bg-opacity));
}
.bg-red-700 {
  --bg-opacity: 1;
  background-color: #c53030;
  background-color: rgba(197, 48, 48, var(--bg-opacity));
}
.border-gray-700 {
  --border-opacity: 1;
  border-color: #4a5568;
  border-color: rgba(74, 85, 104, var(--border-opacity));
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border {
  border-width: 1px;
}
.cursor-pointer {
  cursor: pointer;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.h-8 {
  height: 2rem;
}
.m-8 {
  margin: 2rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mb-auto {
  margin-bottom: auto;
}
.ml-auto {
  margin-left: auto;
}

.outline-none {
  outline: 0;
}
.overflow-hidden {
  overflow: hidden;
}
.p-2 {
  padding: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.pr-10 {
  padding-right: 2.5rem;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.bottom-0 {
  bottom: 0;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-white {
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
}
.text-gray-400 {
  --text-opacity: 1;
  color: #cbd5e0;
  color: rgba(203, 213, 224, var(--text-opacity));
}
.text-gray-500 {
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--text-opacity));
}
.group:focus .group-focus\:text-white {
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
}
.w-8 {
  width: 2rem;
}
.w-full {
  width: 100%;
}
.transform {
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
}
.group:focus .group-focus\:-rotate-180 {
  --transform-rotate: -180deg;
}
.transition {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
}
.duration-500 {
  transition-duration: 0.5s;
}
@media (min-width: 640px) {
  .sm\:container {
    width: 100%;
    max-width: 640px;
  }
  @media (min-width: 768px) {
    .sm\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .sm\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .sm\:container {
      max-width: 1280px;
    }
  }
}
@media (min-width: 768px) {
  .md\:container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .md\:container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .md\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .md\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .md\:container {
      max-width: 1280px;
    }
  }
}
@media (min-width: 1024px) {
  .lg\:container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .lg\:container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .lg\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .lg\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .lg\:container {
      max-width: 1280px;
    }
  }
}
@media (min-width: 1280px) {
  .xl\:container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .xl\:container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .xl\:container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .xl\:container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .xl\:container {
      max-width: 1280px;
    }
  }
}
</style>

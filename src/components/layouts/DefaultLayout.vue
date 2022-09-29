div<template>
  <Disclosure as="nav" style="z-index: 500" class="lg:mt-0 sm:mt-5 w-full fixed top-0 bg-connekta-main" v-slot="{ open }">

    <div style="z-index: 500" class="lg:hidden opacity-0 animate-fade-in-down fixed bottom-0 w-full inline-flex 
     justify-between bg-connekta-main  ">
      <router-link
        aria-current="page"
        active-class="bg-lime-100 text-black"
                :class="[
                  'this.$route.name' === to
                    ? ''
                    : 'inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white',
                  'px-3 py-2 text-sm font-medium',
                ]"
        :to="{ name: 'Home' }"
      >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>

        <span class="">Home</span>
      </router-link>

      <router-link
        aria-current="page"
        active-class="bg-lime-100 text-black"
                :class="[
                  'this.$route.name' === to
                    ? ''
                    : 'inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white',
                  'px-3 py-2 text-sm font-medium',
                ]"
        :to="{ name: 'Profile' }"

      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

        <span class="">Profile</span>
      </router-link>

      <router-link
        aria-current="page"
        active-class="bg-lime-100 text-black"
                :class="[
                  'this.$route.name' === to
                    ? ''
                    : 'inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white',
                  'px-3 py-2 text-sm font-medium',
                ]"
        :to="{ name: 'Circle' }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

        <span class="">Circle</span>
      </router-link>

      <router-link
        aria-current="page"
        active-class="bg-lime-100 text-black"
                :class="[
                  'this.$route.name' === to
                    ? ''
                    : 'inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white',
                  'px-3 py-2 text-sm font-medium',
                ]"
        :to="{ name: 'Explore' }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

        <span class="">Explore</span>
      </router-link>

      <router-link
        aria-current="page"
        active-class="bg-lime-100 text-black"
                :class="[
                  'this.$route.name' === to
                    ? ''
                    : 'inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white',
                  'px-3 py-2 text-sm font-medium',
                ]"
        :to="{ name: 'Fleeks' }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>

        <span class="">Fleeks</span>
      </router-link>
     
    </div>

    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <Menu as="div" style="z-index: 200" class="lg:hidden sm:block ml-3 relative">
            <div>
              <MenuButton
                class="bg-black flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                <div v-if="!user.avatar">
                  <span
                    class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100"
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
                <div v-else>
                  <img
                    :src="'https://apihookers.jotplusfashion.com/public/'  + user.avatar"
                    :alt="user.name"
                    class="rounded-full w-8 h-8 object-cover"
                  />
                  <div v-for="noti in read_status.value" :key="noti.id" class="">
                        
                        <div v-for="noti in read_status.value" :key="noti.id" class="">
                        
                        <span v-show="noti.status == 0" class="absolute w-3 h-3 bg-red-600 rounded-full left-6 top-5">
                </span>
                      </div>
                  </div>
                </div>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <router-link
                    :to="{ name: 'Profile' }"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    {{ user.email }}
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link
                    :to="{ name: 'Notifi' }"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    View Notifications
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{}">
                  <a
                    @click="logout"
                    :class="[
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link :to="{ name: 'Home' }">
              <img
                class="block lg:hidden h-8 w-auto"
                src="/logo/logonew-trans.png"
                alt=""
              />
            </router-link>
            <router-link :to="{ name: 'Home' }">
              <img
                class="hidden lg:block h-8 w-auto"
                src="/logo/logonew-trans.png"
                alt=""
                style=""
              />
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                active-class="bg-lime-100 text-yellow-900"
                :class="[
                  this.$route.name === item.to.name
                    ? ''
                    : 'text-gray-300 hover:bg-lime-100 hover:text-yellow-900',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                >{{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="hidden lg:block text-white">
          <div>
            <p>
              {{ user.connects }}
              <span class="text-gray-300">connects</span> &nbsp; &nbsp;
              <router-link
                :to="{ name: 'buyConnects', params: { id: user.connects } }"
                >{{ buymessage }}</router-link
              >
            </p>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="hidden lg:block p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Search</span>
            <router-link :to="{ name: 'Search' }">
              <svg
                height="30px"
                id="Layer_1"
                style="enable-background: new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g transform="translate(576 192)">
                  <path
                    d="M-544.88-165.121l-7.342-7.342c-1.095,1.701-2.541,3.148-4.242,4.242l7.343,7.342c1.172,1.172,3.071,1.172,4.241,0   C-543.707-162.048-543.707-163.947-544.88-165.121z"
                  />
                  <path
                    d="M-552-180c0-6.627-5.373-12-12-12s-12,5.373-12,12s5.373,12,12,12S-552-173.373-552-180z M-564-171c-4.964,0-9-4.036-9-9   c0-4.963,4.036-9,9-9c4.963,0,9,4.037,9,9C-555-175.036-559.037-171-564-171z"
                  />
                  <path
                    d="M-571-180h2c0-2.757,2.242-5,5-5v-2C-567.86-187-571-183.858-571-180z"
                  />
                </g>
              </svg>
            </router-link>
          </button>

          <button
            type="button"
            class="hidden lg:block bg-black p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <router-link :to="{ name: 'Notifi' }">
              <BellIcon class="h-6 w-6" aria-hidden="true"
            /></router-link>
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" style="z-index: 500" class="hidden lg:block ml-3 relative">
            <div>
              <MenuButton
                class="bg-black flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                <div v-if="!user.avatar">
                  <span
                    class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100"
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
                <div v-else>
                  <img
                    :src="'https://apihookers.jotplusfashion.com/public/' + user.avatar"
                    :alt="user.name"
                    class="rounded-full w-8 h-8 object-fill w-full"
                  />
                </div>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <router-link
                    :to="{ name: 'Profile' }"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    {{ user.email }}
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{}">
                  <a
                    @click="logout"
                    :class="[
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                    ]"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <Menu as="div" class="lg:hidden sm:block relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center px-4 py-2 text-gray-300 text-sm font-medium shadow-sm hover:text-white"
              >
                <span class="sr-only">More menu</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class=" absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="lg:hidden sm:block py-1">
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'Search' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Search</router-link
                    >
                  </MenuItem>
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'Notifi' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      <div v-for="noti in read_status.value" :key="noti.id" class="flex justify-between">
                        <p
                          class="flex text-gray-700 font-medium transition duration-150 ease-in-out items-center"
                        >
                          Notifications
                        </p>
                        
                        <p v-show="noti.status == 0">
                          <span
                            class="inline-block py-1 px-1.5 whitespace-nowrap font-bold bg-red-600 text-white rounded"
                            >New</span
                          >
                        </p>
                      </div>
                    </router-link>
                  </MenuItem>
                </div>
                <div class="sm:block lg:hidden py-1">
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'Profile' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >profile</router-link
                    >
                  </MenuItem>
                  
                </div>
                <div class="sm:block lg:hidden py-1">
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'Explore' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Explore</router-link
                    >
                  </MenuItem>
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'HookByArea' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Users 10km around you</router-link
                    >
                  </MenuItem>
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'UserMatch' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Perfect Match for you</router-link
                    >
                  </MenuItem>
                </div>

                <div class="sm:block lg:hidden py-1">
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'buyConnects' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Buy Connects</router-link
                    >
                  </MenuItem>
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'PurchaseHistory' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >your Purchase History</router-link
                    >
                  </MenuItem>
                </div>

                <div class=" py-1">
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'OngoingHook' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Ongoing Hooks</router-link
                    >
                  </MenuItem>
                  <MenuItem class="opacity-0 animate-fade-in-down" v-slot="{ active }">
                    <router-link
                      :to="{ name: 'HookHistory' }"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >your Hookup History</router-link
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>


          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :to="item.to"
          :class="[
            item.current
              ? 'bg-lime-700 text-white'
              : 'text-gray-300 hover:bg-lime-900 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</router-link
        >
      </div>
    </DisclosurePanel>
  </Disclosure>

  <div
    class="hidden md:hidden pt-1 pl-3 pr-3 mr-5 justify-center flex items-center relative mx-auto text-gray-600"
  >
    <input
      class="w-full border-2 border-yellow-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="search"
      name="search"
      placeholder="Search"
    />
    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
      <svg
        class="text-gray-600 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style="enable-background: new 0 0 56.966 56.966"
        xml:space="preserve"
        width="512px"
        height="512px"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
    </button>
  </div>

  <div class="px-2 pt-2 pb-3 space-y-1 hidden text-white">
    <div class="text-black">
      <p>
        You have {{ user.connects }}
        <span class="text-gray-500">connects |</span> &nbsp; &nbsp;
        <router-link
          :to="{ name: 'buyConnects', params: { id: user.connects } }"
          >{{ buymessage }} |</router-link
        >
        <router-link :to="{ name: 'Explore' }"> Explore </router-link>
      </p>
    </div>
  </div>

  <router-view :key="$route.path"></router-view>

  
  <Notification />
  
  <div class="opacity-0 animate-fade-in-down w-full fixed-bottom bottom-0 text-center bg-blue-400 py-4 text-white">
      We say NO to <strong>rape</strong>, <strong>domestic violence</strong> and <strong>human trafficking</strong>
  </div>
 

  <footer class="mt-5">
    <div class="bg-gray-100 text-gray-300 pt-5">
      <div
        class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto"
      >
        <div class="p-3">
          <router-link :to="{ name: 'Home' }">
            <img class="h-8 w-auto" src="/logo/logonew-trans.png" />
          </router-link>
        </div>
        <div class="p-5">
          <div class="text-sm uppercase text-connekta-main font-bold">
            Quick links
          </div>
          <router-link class="my-3 block" :to="{ name: 'Profile' }"
            >Profile<span
              class="text-gray-300 hover:text-white text-xs p-1"
            ></span></router-link
          ><router-link class="my-3 block" :to="{ name: 'Circle' }"
            >Circle
            <span
              class="text-gray-300 hover:text-white text-xs p-1"
            ></span></router-link
          ><router-link class="my-3 block" :to="{ name: 'Explore' }"
            >Explore
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></router-link>
          <router-link class="my-3 block" :to="{ name: 'Fleeks' }"
            >Fleeks
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></router-link>
        </div>
        <div class="p-5">
          <div class="text-sm uppercase text-connekta-main font-bold">
            More links
          </div>
          <router-link class="my-3 block" :to="{ name: 'HookByArea' }"
            >Users 10km around you<span
              class="text-gray-300 hover:text-white text-xs p-1"
            ></span></router-link
          ><router-link class="my-3 block" :to="{ name: 'UserMatch' }"
            >Perfect Match for you
            <span
              class="text-gray-300 hover:text-white text-xs p-1"
            ></span></router-link
          ><router-link class="my-3 block" :to="{ name: 'buyConnects' }"
            >Buy Connects
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></router-link>
          <router-link class="my-3 block" :to="{ name: 'PurchaseHistory' }"
            >Your Purchase History
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></router-link>
          <router-link class="my-3 block" :to="{ name: 'OngoingHook' }"
            >Ongoing Hooks
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></router-link>
          <router-link class="my-3 block" :to="{ name: 'HookHistory' }"
            >Your Hookup History
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></router-link>
        </div>
        <div class="p-5">
          <div class="text-sm uppercase text-connekta-main font-bold">
            Support
          </div>
          <a class="my-3 block" href="#"
            >Help Center
            <span class="text-gray-300 hover:text-white text-xs p-1"></span
          ></a>
          <router-link v-show="!user" class="my-3 block" :to="{ name: 'Privacy' }"
            >Privacy Policy<span
              class="text-gray-300 hover:text-white text-xs p-1"
            ></span
          ></router-link>
          <router-link v-show="!user" class="my-3 block" :to="{ name: 'Terms' }"
            >Terms & Conditions<span
              class="text-gray-300 hover:text-white text-xs p-1"
            ></span
          ></router-link>
        </div>
        <div class="p-5">
          <div class="text-sm uppercase text-connekta-main font-bold">
            Contact us
          </div>
          <a class="my-3 block" href="mailto:info@connekta.com"
            >info@connekta.com <span class="text-teal-600 text-xs p-1"></span
          ></a>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 pt-2">
      <div
        class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center"
      >
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="/#" class="w-6 mx-1">
            <svg
              class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              xmlns:serif="http://www.serif.com/"
              style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linejoin: round;
                stroke-miterlimit: 2;
              "
            >
              <path
                id="Twitter"
                d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"
              ></path>
            </svg>
          </a>
          <a href="/#" class="w-6 mx-1">
            <svg
              class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              xmlns:serif="http://www.serif.com/"
              style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linejoin: round;
                stroke-miterlimit: 2;
              "
            >
              <path
                id="Facebook"
                d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
              ></path>
            </svg>
          </a>
          <a href="/#" class="w-6 mx-1">
            <svg
              class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              xmlns:serif="http://www.serif.com/"
              style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linejoin: round;
                stroke-miterlimit: 2;
              "
            >
              <g id="Layer_1">
                <circle id="Oval" cx="12" cy="12" r="12"></circle>
                <path
                  id="Shape"
                  d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
                  style="fill: rgb(255, 255, 255)"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div class="my-5">
          <p class="text-center">© Copyright 2022. <router-link :to="{ name: 'Home' }">Connekta</router-link> All Rights Reserved.</p>
          <p class="text-center mt-1 sm:mb-5">Designed by <a href="#">Elipath IT</a>.</p>
          <br class="lg:hidden sm:block"/>
          <p class="lg:hidden sm:block mb-3"></p>
        </div>
      </div>
     
    </div>
  </footer>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

import { computed, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import store from "../../store";
import Notification from "../../components/core/Notification.vue";

const navigation = [
  { name: "Home", to: { name: "Home" } },
  { name: "Profile", to: { name: "Profile" } },
  { name: "Circle", to: { name: "Circle" } },
  { name: "Explore", to: { name: "Explore" } },
  { name: "Fleeks", to: { name: "Fleeks" } },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    Notification,
  },

  setup() {
    let buymessage = ref("Buy Connect(s)");

    const router = useRouter();

    let read_status = ref([]);

    function logout() {
      store.dispatch("auth/logout").then(() => {
        router.push({
          name: "Login",
        });
      });
    }

    function moveTo() {
      console.log("happy moving...");
    }

    const user = computed(() => store.state.users.user.data);
    read_status.value = computed(() => store.state.notifications.readStatus.data);

    store.dispatch("users/getUser");
    store.dispatch("notifications/getReadStatus");

    function refreshNotification() {
store.dispatch("notifications/getReadStatus")
read_status.value = computed(() => store.state.notifications.readStatus.data);
}

onMounted(() => {
window.setInterval(() => {
  refreshNotification()
}, 10000)
})

 refreshNotification();

    if (user.connects == 100) {
      buymessage.value = "Buy connects now";

      store.commit("notify", {
        type: "failure",
        message: "You are running out of connects",
      });
    }

    return {
      user,
      navigation,
      logout,
      buymessage,
      read_status
    };
  },
};
</script>

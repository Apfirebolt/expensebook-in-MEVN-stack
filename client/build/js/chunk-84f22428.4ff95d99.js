(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-84f22428'], {
  3013(t, e, r) {
    r.r(e); const s = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', { staticClass: 'bg-white shadow-sm rounded-md' }, [r('div', [r('transition', {
        attrs: {
          'enter-active-class': 'transition ease-in-out duration-300 transform', 'enter-class': '-translate-x-full', 'enter-to-class': 'translate-x-0', 'leave-active-class': 'transition ease-in-out duration-300 transform', 'leave-class': 'translate-x-0', 'leave-to-class': '-translate-x-full bg-green-600',
        },
      }, [t.showSidebar ? r('div', { staticClass: 'fixed inset-0 flex z-40 md:hidden', attrs: { role: 'dialog', 'aria-modal': 'true' } }, [r('div', { staticClass: 'fixed inset-0 bg-gray-600 bg-opacity-75', attrs: { 'aria-hidden': 'true' } }), r('div', { staticClass: 'relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700' }, [r('div', { staticClass: 'absolute top-0 right-0 -mr-12 pt-2' }, [r('button', { staticClass: 'ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white', attrs: { type: 'button' }, on: { click: t.closeSidebar } }, [r('span', { staticClass: 'sr-only' }, [t._v('Close sidebar')]), r('svg', {
        staticClass: 'h-6 w-6 text-white',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M6 18L18 6M6 6l12 12',
        },
      })])])]), r('div', { staticClass: 'flex-1 h-0 pt-5 pb-4 overflow-y-auto' }, [r('div', { staticClass: 'flex-shrink-0 flex items-center px-4' }, [r('img', { staticClass: 'h-8 w-auto', attrs: { src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg', alt: 'Workflow' } })]), r('mobile-menu-component')], 1), r('div', { staticClass: 'flex-shrink-0 flex border-t border-indigo-800 p-4' }, [r('a', { staticClass: 'flex-shrink-0 group block', attrs: { href: '#' } }, [r('div', { staticClass: 'flex items-center' }, [r('div', [r('img', { staticClass: 'inline-block h-10 w-10 rounded-full', attrs: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', alt: '' } })]), r('div', { staticClass: 'ml-3' }, [r('p', { staticClass: 'text-base font-medium text-white' }, [t._v('Tom Cook')]), r('p', { staticClass: 'text-sm font-medium text-indigo-200 group-hover:text-white' }, [t._v(' View profile ')])])])])])]), r('div', { staticClass: 'flex-shrink-0 w-14', attrs: { 'aria-hidden': 'true' } })]) : t._e()]), r('div', { staticClass: 'hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0' }, [r('div', { staticClass: 'flex-1 flex flex-col min-h-0 bg-indigo-700' }, [r('div', { staticClass: 'flex-1 flex flex-col pt-5 pb-4 overflow-y-auto' }, [t._m(0), r('desktop-sidebar-component')], 1), t._m(1)])]), r('div', { staticClass: 'md:pl-64 flex flex-col flex-1' }, [r('div', { staticClass: 'sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100' }, [r('button', { staticClass: '-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500', attrs: { type: 'button' }, on: { click(e) { t.showSidebar = !0; } } }, [r('span', { staticClass: 'sr-only' }, [t._v('Open sidebar')]), r('svg', {
        staticClass: 'h-6 w-6',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6h16M4 12h16M4 18h16',
        },
      })])])]), r('main', { staticClass: 'flex-1' }, [r('div', { staticClass: 'py-6' }, [t._m(2), r('div', { staticClass: 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8' }, [r('div', { staticClass: 'my-2 border-4 border-dashed border-gray-200 px-2 py-4 rounded-lg' }, [r('change-general-settings', { attrs: { profileData: t.profileData }, on: { updateProfile: t.updateProfileAction } }), r('change-password-form', { on: { changePassword: t.updateProfileAction } }), r('upload-profile-picture')], 1)])])])])], 1)]);
    }; const a = [function () { const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', { staticClass: 'flex items-center flex-shrink-0 px-4' }, [r('img', { staticClass: 'h-8 w-auto', attrs: { src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg', alt: 'Workflow' } })]); }, function () { const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', { staticClass: 'flex-shrink-0 flex border-t border-indigo-800 p-4' }, [r('a', { staticClass: 'flex-shrink-0 w-full group block', attrs: { href: '#' } }, [r('div', { staticClass: 'flex items-center' }, [r('div', [r('img', { staticClass: 'inline-block h-9 w-9 rounded-full', attrs: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', alt: '' } })]), r('div', { staticClass: 'ml-3' }, [r('p', { staticClass: 'text-sm font-medium text-white' }, [t._v('Tom Cook')]), r('p', { staticClass: 'text-xs font-medium text-indigo-200 group-hover:text-white' }, [t._v(' View profile ')])])])])]); }, function () { const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', { staticClass: 'max-w-7xl flex mx-auto px-4 sm:px-6 md:px-8' }, [r('h1', { staticClass: 'text-2xl font-semibold text-gray-900' }, [t._v(' Profile Settings ')])]); }]; const i = r('5530'); const o = r('2f62'); const n = r('cadc'); const l = r('511a'); const d = r('f5c7'); const m = function () { const t = this; const e = t.$createElement; const r = t._self._c || e; return r('ValidationObserver', { scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.handleSubmit; return [r('form', { staticClass: 'font-medium container py-3 px-4 text-gray-700 border-2 my-2 border-rose-600', on: { submit(e) { return e.preventDefault(), s(t.submitForm); } } }, [r('h3', { staticClass: 'text-xl text-center text-red-600 my-2' }, [t._v(' CHANGE PASSWORD ')]), r('div', { staticClass: 'grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [r('ValidationProvider', { attrs: { name: 'Current Password', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.errors; return [r('t-input-group', { attrs: { label: 'Enter Your Current Password', feedback: s[0], variant: s.length > 0 ? 'danger' : '' } }, [r('t-input', { attrs: { type: 'password', name: 'Current Password', variant: s.length > 0 ? 'danger' : '' }, model: { value: t.password, callback(e) { t.password = e; }, expression: 'password' } })], 1)]; } }], null, !0) }), r('ValidationProvider', { attrs: { name: 'Confirm Password', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.errors; return [r('t-input-group', { attrs: { label: 'Enter Your Password Again', feedback: s[0], variant: s.length > 0 ? 'danger' : '' } }, [r('t-input', { attrs: { type: 'password', name: 'Confirm Password', variant: s.length > 0 ? 'danger' : '' }, model: { value: t.confirmPassword, callback(e) { t.confirmPassword = e; }, expression: 'confirmPassword' } })], 1)]; } }], null, !0) })], 1), r('div', { staticClass: 'flex justify-center mt-6' }, [r('t-button', { attrs: { type: 'submit' } }, [t._v(' Change Password ')])], 1)])]; } }]) }); }; const u = []; const c = { name: 'ChangePasswordForm', data() { return { password: '', confirmPassword: '' }; }, methods: { submitForm() { this.$emit('changePassword', { password: this.password }); } } }; const h = c; const p = r('2877'); const f = Object(p.a)(h, m, u, !1, null, null, null); const x = f.exports; const v = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('form', { staticClass: 'border-2 font-medium border-rose-600 my-2 p-2', attrs: { enctype: 'multipart/form-data' }, on: { submit(e) { return e.preventDefault(), t.submitForm.apply(null, arguments); } } }, [r('h3', { staticClass: 'text-xl text-center text-red-600 my-2' }, [t._v(' CHANGE PROFILE PICTURE ')]), r('div', { staticClass: 'space-y-2 flex justify-center' }, [r('input', {
        ref: 'fileinput', staticClass: 'hidden', attrs: { type: 'file', multiple: '' }, on: { change: t.updateProfilePicture },
      }), r('div', { staticClass: 'mx-2' }, [r('p', { class: t.errorText ? 'text-red-500' : '' }, [t._v(' Update Your Profile Picture ')]), r('p', { staticClass: 'text-red-500' }, [t._v(` ${t._s(t.errorText)} `)])]), r('t-button', { staticClass: 'flex justify-right items-center', attrs: { type: 'button' }, on: { click(e) { return e.preventDefault(), t.$refs.fileinput.click(); } } }, [t._v(' Upload Profile Picture ')])], 1), r('div', { staticClass: 'flex justify-between mt-4' }, [r('t-button', { attrs: { type: 'submit' } }, [t._v(' Update Profile Picture ')])], 1)]);
    }; const g = []; const w = r('1da1'); const k = (r('96cf'), { name: 'ChangeGeneralSettings', data() { return { profilePicture: null, errorText: '' }; }, methods: { updateProfilePicture() { this.profilePicture = Object(i.a)({}, this.$refs.fileinput.files); }, submitForm() { const t = this; return Object(w.a)(regeneratorRuntime.mark((function e() { let r; return regeneratorRuntime.wrap(((e) => { while (1) switch (e.prev = e.next) { case 0: t.profilePicture ? (t.errorText = '', r = new FormData(), r.append('file', t.profilePicture[0]), t.$emit('updateSetting', r)) : t.errorText = 'No file chosen'; case 1: case 'end': return e.stop(); } }), e); })))(); } } }); const b = k; const C = Object(p.a)(b, v, g, !1, null, null, null); const y = C.exports; const _ = function () { const t = this; const e = t.$createElement; const r = t._self._c || e; return r('ValidationObserver', { scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.handleSubmit; return [r('form', { staticClass: 'font-medium container py-3 px-4 text-gray-700 border-2 my-2 border-rose-600', on: { submit(e) { return e.preventDefault(), s(t.submitForm); } } }, [r('h3', { staticClass: 'text-xl text-center text-red-600 my-2' }, [t._v(' CHANGE GENERAL SETTINGS ')]), r('div', { staticClass: 'grid sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [r('ValidationProvider', { attrs: { name: 'First Name', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.errors; return [r('t-input-group', { attrs: { label: 'Enter First Name', feedback: s[0], variant: s.length > 0 ? 'danger' : '' } }, [r('t-input', { attrs: { type: 'text', name: 'First Name', variant: s.length > 0 ? 'danger' : '' }, model: { value: t.firstName, callback(e) { t.firstName = e; }, expression: 'firstName' } })], 1)]; } }], null, !0) }), r('ValidationProvider', { attrs: { name: 'Last Name', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.errors; return [r('t-input-group', { attrs: { label: 'Enter Last Name', feedback: s[0], variant: s.length > 0 ? 'danger' : '' } }, [r('t-input', { attrs: { type: 'text', name: 'Last Name', variant: s.length > 0 ? 'danger' : '' }, model: { value: t.lastName, callback(e) { t.lastName = e; }, expression: 'lastName' } })], 1)]; } }], null, !0) }), r('ValidationProvider', { attrs: { name: 'Email', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const s = e.errors; return [r('t-input-group', { attrs: { label: 'Enter Email', feedback: s[0], variant: s.length > 0 ? 'danger' : '' } }, [r('t-input', { attrs: { type: 'email', name: 'Email', variant: s.length > 0 ? 'danger' : '' }, model: { value: t.email, callback(e) { t.email = e; }, expression: 'email' } })], 1)]; } }], null, !0) })], 1), r('div', { staticClass: 'flex justify-center mt-6' }, [r('t-button', { attrs: { type: 'submit' } }, [t._v(' Change Settings ')])], 1)])]; } }]) }); }; const M = []; const H = {
      name: 'ChangeProfileSettingsForm', props: { profileData: { type: Object, required: !0 } }, data() { return { firstName: '', lastName: '', email: '' }; }, mounted() { this.firstName = this.profileData.firstName, this.lastName = this.profileData.lastName, this.email = this.profileData.email; }, methods: { submitForm() { this.$emit('updateProfile', { firstName: this.firstName, lastName: this.lastName, email: this.email }); } },
    }; const P = H; const j = Object(p.a)(P, _, M, !1, null, null, null); const E = j.exports; const B = {
      name: 'InvestmentHome',
      components: {
        DesktopSidebarComponent: l.a, MobileMenuComponent: d.a, ChangePasswordForm: x, UploadProfilePicture: y, ChangeGeneralSettings: E,
      },
      data() { return { isAddInvestmentModalOpened: !1, showSidebar: !0 }; },
      mounted() { this.getProfileAction(); },
      computed: Object(i.a)({}, Object(o.c)({ profileData: n.b })),
      methods: Object(i.a)(Object(i.a)({}, Object(o.b)({ getProfileAction: n.b, updateProfileAction: n.l })), {}, { closeSidebar() { this.showSidebar = !this.showSidebar; } }),
    }; const N = B; const V = Object(p.a)(N, s, a, !1, null, null, null); e.default = V.exports;
  },
  '511a': function (t, e, r) {
    const s = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('nav', { staticClass: 'mt-5 flex-1 px-2 space-y-1' }, [r('router-link', { staticClass: 'bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'Home' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
      })]), t._v(' Dashboard ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ExpenseHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        },
      })]), t._v(' Expense ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'GoalsHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        },
      })]), t._v(' Goals ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'CalendarHome' }, href: '#' } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
      })]), t._v(' Calendar ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ExpenseBookHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        },
      })]), t._v(' Expense Book ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ReportsHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
      })]), t._v(' Reports ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'IncomeHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      })]), t._v(' Income ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'BorrowHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
      })]), t._v(' Borrow ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'InvestmentHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
      })]), t._v(' Investment ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'PolicyHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
      })]), t._v(' Policy ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'NotificationHome' } } }, [r('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
      })]), t._v(' Notifications ')])], 1);
    }; const a = []; const i = { name: 'DesktopMenu' }; const o = i; const n = r('2877'); const l = Object(n.a)(o, s, a, !1, null, null, null); e.a = l.exports;
  },
  f5c7(t, e, r) {
    const s = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('nav', { staticClass: 'mt-5 px-2 space-y-1' }, [r('a', { staticClass: 'bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { href: '#' } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
      })]), t._v(' Dashboard ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ExpenseHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        },
      })]), t._v(' Expense ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'GoalsHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        },
      })]), t._v(' Goals ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'CalendarHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
      })]), t._v(' Expense Calendar ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ExpenseBookHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        },
      })]), t._v(' Expense Book ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ReportsHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
      })]), t._v(' Reports ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'IncomeHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      })]), t._v(' Income ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'BorrowHome' } } }, [r('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
      })]), t._v(' Borrow ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'InvestmentHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
      })]), t._v(' Investment ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'PolicyHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
      })]), t._v(' Policy ')]), r('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'NotificationHome' } } }, [r('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [r('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
      })]), t._v(' Notifications ')])], 1);
    }; const a = []; const i = { name: 'MobileMenu' }; const o = i; const n = r('2877'); const l = Object(n.a)(o, s, a, !1, null, null, null); e.a = l.exports;
  },
}]);
// # sourceMappingURL=chunk-84f22428.4ff95d99.js.map

(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-bd07ca10'], {
  '253d': function (t, e, i) {
    i.r(e); const o = function () {
      const t = this; const e = t.$createElement; const i = t._self._c || e; return i('div', { staticClass: 'bg-white shadow-sm rounded-md' }, [i('t-modal', { attrs: { header: 'Add Policy' }, model: { value: t.isAddPolicyModalOpened, callback(e) { t.isAddPolicyModalOpened = e; }, expression: 'isAddPolicyModalOpened' } }, [i('add-policy-form', { on: { submit: t.addPolicy, cancel(e) { t.isAddPolicyModalOpened = !1; } } })], 1), i('t-modal', { attrs: { header: 'Update Policy' }, model: { value: t.isUpdateModalOpened, callback(e) { t.isUpdateModalOpened = e; }, expression: 'isUpdateModalOpened' } }, [i('update-policy-form', { attrs: { policy: t.selectedPolicy }, on: { updatePolicy: t.updatePolicy, cancel(e) { t.isUpdateModalOpened = !1; } } })], 1), i('t-modal', { attrs: { header: 'Confirm Delete' }, model: { value: t.isConfirmModalOpened, callback(e) { t.isConfirmModalOpened = e; }, expression: 'isConfirmModalOpened' } }, [i('confirm-modal', { attrs: { message: t.deleteMessage }, on: { confirm: t.deletePolicy, cancel(e) { t.isConfirmModalOpened = !1; } } })], 1), i('div', [i('transition', {
        attrs: {
          'enter-active-class': 'transition ease-in-out duration-300 transform', 'enter-class': '-translate-x-full', 'enter-to-class': 'translate-x-0', 'leave-active-class': 'transition ease-in-out duration-300 transform', 'leave-class': 'translate-x-0', 'leave-to-class': '-translate-x-full bg-green-600',
        },
      }, [t.showSidebar ? i('div', { staticClass: 'fixed inset-0 flex z-40 md:hidden', attrs: { role: 'dialog', 'aria-modal': 'true' } }, [i('div', { staticClass: 'fixed inset-0 bg-gray-600 bg-opacity-75', attrs: { 'aria-hidden': 'true' } }), i('div', { staticClass: 'relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700' }, [i('div', { staticClass: 'absolute top-0 right-0 -mr-12 pt-2' }, [i('button', { staticClass: 'ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white', attrs: { type: 'button' }, on: { click: t.closeSidebar } }, [i('span', { staticClass: 'sr-only' }, [t._v('Close sidebar')]), i('svg', {
        staticClass: 'h-6 w-6 text-white',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M6 18L18 6M6 6l12 12',
        },
      })])])]), i('div', { staticClass: 'flex-1 h-0 pt-5 pb-4 overflow-y-auto' }, [i('div', { staticClass: 'flex-shrink-0 flex items-center px-4' }, [i('img', { staticClass: 'h-8 w-auto', attrs: { src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg', alt: 'Workflow' } })]), i('mobile-menu-component')], 1), i('div', { staticClass: 'flex-shrink-0 flex border-t border-indigo-800 p-4' }, [i('a', { staticClass: 'flex-shrink-0 group block', attrs: { href: '#' } }, [i('div', { staticClass: 'flex items-center' }, [i('div', [i('img', { staticClass: 'inline-block h-10 w-10 rounded-full', attrs: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', alt: '' } })]), i('div', { staticClass: 'ml-3' }, [i('p', { staticClass: 'text-base font-medium text-white' }, [t._v('Tom Cook')]), i('p', { staticClass: 'text-sm font-medium text-indigo-200 group-hover:text-white' }, [t._v(' View profile ')])])])])])]), i('div', { staticClass: 'flex-shrink-0 w-14', attrs: { 'aria-hidden': 'true' } })]) : t._e()]), i('div', { staticClass: 'hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0' }, [i('div', { staticClass: 'flex-1 flex flex-col min-h-0 bg-indigo-700' }, [i('div', { staticClass: 'flex-1 flex flex-col pt-5 pb-4 overflow-y-auto' }, [t._m(0), i('desktop-sidebar-component')], 1), t._m(1)])]), i('div', { staticClass: 'md:pl-64 flex flex-col flex-1' }, [i('div', { staticClass: 'sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100' }, [i('button', { staticClass: '-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500', attrs: { type: 'button' }, on: { click(e) { t.showSidebar = !0; } } }, [i('span', { staticClass: 'sr-only' }, [t._v('Open sidebar')]), i('svg', {
        staticClass: 'h-6 w-6',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6h16M4 12h16M4 18h16',
        },
      })])])]), i('main', { staticClass: 'flex-1' }, [i('div', { staticClass: 'py-6' }, [i('div', { staticClass: 'max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8' }, [i('h1', { staticClass: 'text-2xl font-semibold text-gray-900' }, [t._v(' Policy ')]), i('t-button', { on: { click(e) { t.isAddPolicyModalOpened = !0; } } }, [t._v(' Add Policy ')])], 1), i('div', { staticClass: 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8' }, [i('div', { staticClass: 'my-2 border-4 border-dashed border-gray-200 px-2 py-4 rounded-lg' }, [i('div', { staticClass: 'grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, t._l(t.allPolicies, ((e) => i('div', { key: e._id }, [i('policy-card', { attrs: { policy: e }, on: { deletePolicy: t.openConfirmDeleteModal, updatePolicy: t.openUpdatePolicyModal } })], 1))), 0)])])])])])], 1)], 1);
    }; const r = [function () { const t = this; const e = t.$createElement; const i = t._self._c || e; return i('div', { staticClass: 'flex items-center flex-shrink-0 px-4' }, [i('img', { staticClass: 'h-8 w-auto', attrs: { src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg', alt: 'Workflow' } })]); }, function () { const t = this; const e = t.$createElement; const i = t._self._c || e; return i('div', { staticClass: 'flex-shrink-0 flex border-t border-indigo-800 p-4' }, [i('a', { staticClass: 'flex-shrink-0 w-full group block', attrs: { href: '#' } }, [i('div', { staticClass: 'flex items-center' }, [i('div', [i('img', { staticClass: 'inline-block h-9 w-9 rounded-full', attrs: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', alt: '' } })]), i('div', { staticClass: 'ml-3' }, [i('p', { staticClass: 'text-sm font-medium text-white' }, [t._v('Tom Cook')]), i('p', { staticClass: 'text-xs font-medium text-indigo-200 group-hover:text-white' }, [t._v(' View profile ')])])])])]); }]; const a = i('5530'); const s = (i('b0c0'), i('a4d3'), i('e01a'), i('7db0'), i('d3b7'), i('2f62')); const n = i('9220'); const l = function () { const t = this; const e = t.$createElement; const i = t._self._c || e; return i('ValidationObserver', { scopedSlots: t._u([{ key: 'default', fn(e) { const o = e.handleSubmit; return [i('form', { staticClass: 'font-medium text-gray-700', on: { submit(e) { return e.preventDefault(), o(t.submitForm); } } }, [i('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [i('ValidationProvider', { attrs: { name: 'Policy Name', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const o = e.errors; return [i('t-input-group', { attrs: { label: 'Policy Name', feedback: o[0], variant: o.length > 0 ? 'danger' : '' } }, [i('t-input', { attrs: { type: 'text', name: 'Asset Name', variant: o.length > 0 ? 'danger' : '' }, model: { value: t.policyData.name, callback(e) { t.$set(t.policyData, 'name', e); }, expression: 'policyData.name' } })], 1)]; } }], null, !0) })], 1), i('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [i('t-input-group', { attrs: { label: 'Policy Premium Period' } }, [i('t-select', { attrs: { placeholder: 'Select Policy Premium Period', options: t.periodChoices, name: 'Policy Preimum Period' }, model: { value: t.policyData.premiumPeriod, callback(e) { t.$set(t.policyData, 'premiumPeriod', e); }, expression: 'policyData.premiumPeriod' } })], 1)], 1), i('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [i('ValidationProvider', { attrs: { name: 'Provider Name' }, scopedSlots: t._u([{ key: 'default', fn(e) { const o = e.errors; return [i('t-input-group', { attrs: { label: 'Poilicy Vendor Name', feedback: o[0], variant: o.length > 0 ? 'danger' : '' } }, [i('t-input', { attrs: { type: 'text', name: 'Vendor Name', variant: o.length > 0 ? 'danger' : '' }, model: { value: t.policyData.vendorName, callback(e) { t.$set(t.policyData, 'vendorName', e); }, expression: 'policyData.vendorName' } })], 1)]; } }], null, !0) })], 1), i('div', { staticClass: 'grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [i('ValidationProvider', { attrs: { name: 'Policy Cover Amount', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const o = e.errors; return [i('t-input-group', { attrs: { label: 'Policy Cover Amount', feedback: o[0], variant: o.length > 0 ? 'danger' : '' } }, [i('t-input', { attrs: { type: 'number', name: 'Cover Amount', variant: o.length > 0 ? 'danger' : '' }, model: { value: t.policyData.coverAmount, callback(e) { t.$set(t.policyData, 'coverAmount', e); }, expression: 'policyData.coverAmount' } })], 1)]; } }], null, !0) }), i('ValidationProvider', { attrs: { name: 'Policy Premium Amount', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const o = e.errors; return [i('t-input-group', { attrs: { label: 'Policy Premium Amount', feedback: o[0], variant: o.length > 0 ? 'danger' : '' } }, [i('t-input', { attrs: { type: 'number', name: 'Premium Amount', variant: o.length > 0 ? 'danger' : '' }, model: { value: t.policyData.premiumAmount, callback(e) { t.$set(t.policyData, 'premiumAmount', e); }, expression: 'policyData.premiumAmount' } })], 1)]; } }], null, !0) })], 1), i('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [i('t-input-group', { attrs: { label: 'Policy Desription (Optional)' } }, [i('t-textarea', { attrs: { rows: '10', cols: '60', placeholder: 'Describe your policy in some detail' }, model: { value: t.policyData.description, callback(e) { t.$set(t.policyData, 'description', e); }, expression: 'policyData.description' } })], 1)], 1), i('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [i('ValidationProvider', { attrs: { name: 'Policy Premium Date', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const o = e.errors; return [i('t-input-group', { attrs: { label: 'Policy Premium Date', feedback: o[0], variant: o.length > 0 ? 'danger' : '' } }, [i('t-datepicker', { model: { value: t.policyData.premiumDate, callback(e) { t.$set(t.policyData, 'premiumDate', e); }, expression: 'policyData.premiumDate' } })], 1)]; } }], null, !0) })], 1), i('div', { staticClass: 'flex justify-between mt-6' }, [i('t-button', { attrs: { type: 'button', variant: 'error' }, on: { click(e) { return t.$emit('cancel'); } } }, [t._v(' Cancel ')]), i('t-button', { attrs: { type: 'submit' } }, [t._v(' Submit ')])], 1)])]; } }]) }); }; const d = []; const c = {
      name: 'AddPolicyForm', props: { policy: { type: Object, required: !1 } }, data() { return { policyData: {}, periodChoices: ['1 Month', '3 Months', '6 Months', '1 Year'] }; }, mounted() { this.policy && (this.policyData = this.policy); }, methods: { submitForm() { this.policy ? this.$emit('updatePolicy', this.policyData) : this.$emit('submit', this.policyData); } },
    }; const m = c; const u = i('2877'); const p = Object(u.a)(m, l, d, !1, null, null, null); const h = p.exports; const v = function () {
      const t = this; const e = t.$createElement; const i = t._self._c || e; return i('div', { staticClass: 'p-2 bg-blue-600 text-white rounded' }, [i('p', { staticClass: 'truncate bg-green-500 p-2 font-semibold text-center my-2' }, [t._v(` ${t._s(t.policy.vendorName)} - ${t._s(t.policy.name)} `)]), i('p', { staticClass: 'truncate font-semibold text-center my-2' }, [t._v(` ${t._s(t.policy.description)} `)]), i('p', { staticClass: 'truncate my-1 text-center' }, [t._v(` Policy Premium Period : ${t._s(t.policy.premiumPeriod)} `)]), i('p', { staticClass: 'truncate my-1 text-center' }, [t._v(` Cover Amount : Rs ${t._s(t.policy.coverAmount)} `)]), i('p', { staticClass: 'truncate my-1 text-center' }, [t._v(` Premium Amount : Rs ${t._s(t.policy.premiumAmount)} `)]), i('div', { staticClass: 'flex items-center justify-center my-2' }, [i('span', { staticClass: 'mx-1 cursor-pointer', on: { click(e) { return e.preventDefault(), t.editPolicy.apply(null, arguments); } } }, [i('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
        },
      })])]), i('span', { staticClass: 'mx-1 cursor-pointer', on: { click(e) { return e.preventDefault(), t.deletePolicy.apply(null, arguments); } } }, [i('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
        },
      })])])])]);
    }; const f = []; const g = { name: 'PolicyCard', props: { policy: { type: Object, required: !0 } }, methods: { deletePolicy() { this.$emit('deletePolicy', this.policy._id); }, editPolicy() { this.$emit('updatePolicy', this.policy._id); } } }; const x = g; const w = Object(u.a)(x, v, f, !1, null, null, null); const y = w.exports; const k = i('511a'); const b = i('f5c7'); const C = i('6ae6'); const P = {
      name: 'PolicyHome',
      components: {
        AddPolicyForm: h, UpdatePolicyForm: h, DesktopSidebarComponent: k.a, MobileMenuComponent: b.a, PolicyCard: y, ConfirmModal: C.a,
      },
      data() {
        return {
          isAddPolicyModalOpened: !1, showSidebar: !0, isConfirmModalOpened: !1, isUpdateModalOpened: !1, selectedPolicy: null, deleteMessage: '',
        };
      },
      computed: Object(a.a)({}, Object(s.c)({ allPolicies: n.c })),
      mounted() { this.getAllPolicies(); },
      methods: Object(a.a)(Object(a.a)({}, Object(s.b)({
        addPolicyAction: n.a, updatePolicyAction: n.i, deletePolicyAction: n.b, getAllPolicies: n.d,
      })), {}, {
        addPolicy(t) {
          const e = {
            name: t.name, vendorName: t.vendorName, premiumAmount: t.premiumAmount, coverAmount: t.coverAmount, premiumPeriod: t.premiumPeriod, description: t.description, duration: t.duration, premiumDate: t.premiumDate,
          }; this.addPolicyAction(e), this.isAddPolicyModalOpened = !1, this.getAllPolicies();
        },
        closeSidebar() { this.showSidebar = !this.showSidebar; },
        deletePolicy() { this.isConfirmModalOpened = !1, this.deletePolicyAction(this.selectedPolicy._id), this.getAllPolicies(); },
        openUpdatePolicyModal(t) { this.isUpdateModalOpened = !0, this.selectedPolicy = this.allPolicies.find(((e) => e._id === t)); },
        updatePolicy() { this.isUpdateModalOpened = !1, this.updatePolicyAction(this.selectedPolicy), this.getAllPolicies(); },
        openConfirmDeleteModal(t) { this.isConfirmModalOpened = !0, this.selectedPolicy = this.allPolicies.find(((e) => e._id === t)), this.deleteMessage = 'Are you sure you want to delete policy of '.concat(this.selectedPolicy.amount, ' ?'); },
      }),
    }; const M = P; const _ = Object(u.a)(M, o, r, !1, null, null, null); e.default = _.exports;
  },
  '511a': function (t, e, i) {
    const o = function () {
      const t = this; const e = t.$createElement; const i = t._self._c || e; return i('nav', { staticClass: 'mt-5 flex-1 px-2 space-y-1' }, [i('router-link', { staticClass: 'bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'Home' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
      })]), t._v(' Dashboard ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ExpenseHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        },
      })]), t._v(' Expense ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'GoalsHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        },
      })]), t._v(' Goals ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'CalendarHome' }, href: '#' } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
      })]), t._v(' Calendar ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ExpenseBookHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        },
      })]), t._v(' Expense Book ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ReportsHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
      })]), t._v(' Reports ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'IncomeHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      })]), t._v(' Income ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'BorrowHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
      })]), t._v(' Borrow ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'InvestmentHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
      })]), t._v(' Investment ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'PolicyHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
      })]), t._v(' Policy ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'NotificationHome' } } }, [i('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
      })]), t._v(' Notifications ')])], 1);
    }; const r = []; const a = { name: 'DesktopMenu' }; const s = a; const n = i('2877'); const l = Object(n.a)(s, o, r, !1, null, null, null); e.a = l.exports;
  },
  '6ae6': function (t, e, i) {
    const o = function () { const t = this; const e = t.$createElement; const i = t._self._c || e; return i('form', { staticClass: 'font-medium text-gray-700', on: { submit(e) { return e.preventDefault(), t.submitForm.apply(null, arguments); } } }, [i('p', [t._v(` ${t._s(t.message)} `)]), i('div', { staticClass: 'flex justify-between mt-6' }, [i('t-button', { attrs: { type: 'button', variant: 'error' }, on: { click(e) { return t.$emit('cancel'); } } }, [t._v(' Cancel ')]), i('t-button', { attrs: { type: 'submit' } }, [t._v(' Submit ')])], 1)]); }; const r = []; const a = { name: 'ConfirmModal', props: { message: { type: String, required: !0 } }, methods: { submitForm() { this.$emit('confirm'); } } }; const s = a; const n = i('2877'); const l = Object(n.a)(s, o, r, !1, null, null, null); e.a = l.exports;
  },
  '7db0': function (t, e, i) {
    const o = i('23e7'); const r = i('b727').find; const a = i('44d2'); const s = 'find'; let n = !0; s in [] && Array(1)[s]((() => { n = !1; })), o({ target: 'Array', proto: !0, forced: n }, { find(t) { return r(this, t, arguments.length > 1 ? arguments[1] : void 0); } }), a(s);
  },
  e01a(t, e, i) {
    const o = i('23e7'); const r = i('83ab'); const a = i('da84'); const s = i('e330'); const n = i('1a2d'); const l = i('1626'); const d = i('3a9b'); const c = i('577e'); const m = i('9bf2').f; const u = i('e893'); const p = a.Symbol; const h = p && p.prototype; if (r && l(p) && (!('description' in h) || void 0 !== p().description)) { const v = {}; const f = function () { const t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : c(arguments[0]); const e = d(h, this) ? new p(t) : void 0 === t ? p() : p(t); return t === '' && (v[e] = !0), e; }; u(f, p), f.prototype = h, h.constructor = f; const g = String(p('test')) == 'Symbol(test)'; const x = s(h.toString); const w = s(h.valueOf); const y = /^Symbol\((.*)\)[^)]+$/; const k = s(''.replace); const b = s(''.slice); m(h, 'description', { configurable: !0, get() { const t = w(this); const e = x(t); if (n(v, t)) return ''; const i = g ? b(e, 7, -1) : k(e, y, '$1'); return i === '' ? void 0 : i; } }), o({ global: !0, forced: !0 }, { Symbol: f }); }
  },
  f5c7(t, e, i) {
    const o = function () {
      const t = this; const e = t.$createElement; const i = t._self._c || e; return i('nav', { staticClass: 'mt-5 px-2 space-y-1' }, [i('a', { staticClass: 'bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { href: '#' } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
      })]), t._v(' Dashboard ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ExpenseHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        },
      })]), t._v(' Expense ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'GoalsHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        },
      })]), t._v(' Goals ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'CalendarHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
      })]), t._v(' Expense Calendar ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ExpenseBookHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        },
      })]), t._v(' Expense Book ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ReportsHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
      })]), t._v(' Reports ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'IncomeHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      })]), t._v(' Income ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'BorrowHome' } } }, [i('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
      })]), t._v(' Borrow ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'InvestmentHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
      })]), t._v(' Investment ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'PolicyHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
      })]), t._v(' Policy ')]), i('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'NotificationHome' } } }, [i('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [i('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
      })]), t._v(' Notifications ')])], 1);
    }; const r = []; const a = { name: 'MobileMenu' }; const s = a; const n = i('2877'); const l = Object(n.a)(s, o, r, !1, null, null, null); e.a = l.exports;
  },
}]);
// # sourceMappingURL=chunk-bd07ca10.9aaf4b1f.js.map

(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-7d8bcc92'], {
  4899(t, e, o) {
    o.r(e); const a = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'bg-white shadow-sm rounded-md' }, [o('t-modal', { attrs: { header: 'Add Goal' }, model: { value: t.isAddGoalModalOpened, callback(e) { t.isAddGoalModalOpened = e; }, expression: 'isAddGoalModalOpened' } }, [o('add-goal-form', { on: { submit: t.addGoal, cancel(e) { t.isAddGoalModalOpened = !1; } } })], 1), o('t-modal', { attrs: { header: 'Update Goal' }, model: { value: t.isUpdateModalOpened, callback(e) { t.isUpdateModalOpened = e; }, expression: 'isUpdateModalOpened' } }, [o('update-goal-form', { attrs: { goal: t.selectedGoal }, on: { updateGoal: t.updateGoal, cancel(e) { t.isUpdateModalOpened = !1; } } })], 1), o('t-modal', { attrs: { header: 'Confirm Delete' }, model: { value: t.isConfirmModalOpened, callback(e) { t.isConfirmModalOpened = e; }, expression: 'isConfirmModalOpened' } }, [o('confirm-modal', { attrs: { message: t.deleteMessage }, on: { confirm: t.deleteGoal, cancel(e) { t.isConfirmModalOpened = !1; } } })], 1), o('div', [o('transition', {
        attrs: {
          'enter-active-class': 'transition ease-in-out duration-300 transform', 'enter-class': '-translate-x-full', 'enter-to-class': 'translate-x-0', 'leave-active-class': 'transition ease-in-out duration-300 transform', 'leave-class': 'translate-x-0', 'leave-to-class': '-translate-x-full bg-green-600',
        },
      }, [t.showSidebar ? o('div', { staticClass: 'fixed inset-0 flex z-40 md:hidden', attrs: { role: 'dialog', 'aria-modal': 'true' } }, [o('div', { staticClass: 'fixed inset-0 bg-gray-600 bg-opacity-75', attrs: { 'aria-hidden': 'true' } }), o('div', { staticClass: 'relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700' }, [o('div', { staticClass: 'absolute top-0 right-0 -mr-12 pt-2' }, [o('button', { staticClass: 'ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white', attrs: { type: 'button' }, on: { click: t.closeSidebar } }, [o('span', { staticClass: 'sr-only' }, [t._v('Close sidebar')]), o('svg', {
        staticClass: 'h-6 w-6 text-white',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M6 18L18 6M6 6l12 12',
        },
      })])])]), o('div', { staticClass: 'flex-1 h-0 pt-5 pb-4 overflow-y-auto' }, [o('div', { staticClass: 'flex-shrink-0 flex items-center px-4' }, [o('img', { staticClass: 'h-8 w-auto', attrs: { src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg', alt: 'Workflow' } })]), o('mobile-menu-component')], 1), o('div', { staticClass: 'flex-shrink-0 flex border-t border-indigo-800 p-4' }, [o('a', { staticClass: 'flex-shrink-0 group block', attrs: { href: '#' } }, [o('div', { staticClass: 'flex items-center' }, [o('div', [o('img', { staticClass: 'inline-block h-10 w-10 rounded-full', attrs: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', alt: '' } })]), o('div', { staticClass: 'ml-3' }, [o('p', { staticClass: 'text-base font-medium text-white' }, [t._v('Tom Cook')]), o('p', { staticClass: 'text-sm font-medium text-indigo-200 group-hover:text-white' }, [t._v(' View profile ')])])])])])]), o('div', { staticClass: 'flex-shrink-0 w-14', attrs: { 'aria-hidden': 'true' } })]) : t._e()]), o('div', { staticClass: 'hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0' }, [o('div', { staticClass: 'flex-1 flex flex-col min-h-0 bg-indigo-700' }, [o('div', { staticClass: 'flex-1 flex flex-col pt-5 pb-4 overflow-y-auto' }, [t._m(0), o('desktop-sidebar-component')], 1), t._m(1)])]), o('div', { staticClass: 'md:pl-64 flex flex-col flex-1' }, [o('div', { staticClass: 'sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100' }, [o('button', { staticClass: '-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500', attrs: { type: 'button' }, on: { click(e) { t.showSidebar = !0; } } }, [o('span', { staticClass: 'sr-only' }, [t._v('Open sidebar')]), o('svg', {
        staticClass: 'h-6 w-6',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6h16M4 12h16M4 18h16',
        },
      })])])]), o('main', { staticClass: 'flex-1' }, [o('div', { staticClass: 'py-6' }, [o('div', { staticClass: 'max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8' }, [o('h1', { staticClass: 'text-2xl font-semibold text-gray-900' }, [t._v(' Goal ')]), o('t-button', { on: { click(e) { t.isAddGoalModalOpened = !0; } } }, [t._v(' Add Goal ')])], 1), o('div', { staticClass: 'max-w-7xl mx-auto px-4 sm:px-6 md:px-8' }, [o('div', { staticClass: 'my-2 border-4 border-dashed border-gray-200 px-2 py-4 rounded-lg' }, [o('div', { staticClass: 'grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, t._l(t.allGoals, ((e) => o('div', { key: e._id }, [o('goal-card', { attrs: { goal: e }, on: { deleteGoal: t.openConfirmDeleteModal, updateGoal: t.openUpdateGoalModal } })], 1))), 0)])])])])])], 1)], 1);
    }; const s = [function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'flex items-center flex-shrink-0 px-4' }, [o('img', { staticClass: 'h-8 w-auto', attrs: { src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg', alt: 'Workflow' } })]); }, function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'flex-shrink-0 flex border-t border-indigo-800 p-4' }, [o('a', { staticClass: 'flex-shrink-0 w-full group block', attrs: { href: '#' } }, [o('div', { staticClass: 'flex items-center' }, [o('div', [o('img', { staticClass: 'inline-block h-9 w-9 rounded-full', attrs: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', alt: '' } })]), o('div', { staticClass: 'ml-3' }, [o('p', { staticClass: 'text-sm font-medium text-white' }, [t._v('Tom Cook')]), o('p', { staticClass: 'text-xs font-medium text-indigo-200 group-hover:text-white' }, [t._v(' View profile ')])])])])]); }]; const i = o('5530'); const r = (o('7db0'), o('d3b7'), o('2f62')); const n = o('65fe'); const l = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('ValidationObserver', { scopedSlots: t._u([{ key: 'default', fn(e) { const a = e.handleSubmit; return [o('form', { staticClass: 'font-medium text-gray-700', on: { submit(e) { return e.preventDefault(), a(t.submitForm); } } }, [o('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [o('ValidationProvider', { attrs: { name: 'Title', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const a = e.errors; return [o('t-input-group', { attrs: { label: 'Title', feedback: a[0], variant: a.length > 0 ? 'danger' : '' } }, [o('t-input', { attrs: { type: 'text', name: 'Title', variant: a.length > 0 ? 'danger' : '' }, model: { value: t.goalData.title, callback(e) { t.$set(t.goalData, 'title', e); }, expression: 'goalData.title' } })], 1)]; } }], null, !0) })], 1), o('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [o('ValidationProvider', { attrs: { name: 'Goal Amount', rules: 'required' }, scopedSlots: t._u([{ key: 'default', fn(e) { const a = e.errors; return [o('t-input-group', { attrs: { label: 'Goal Amount', feedback: a[0], variant: a.length > 0 ? 'danger' : '' } }, [o('t-input', { attrs: { type: 'number', name: 'Amount', variant: a.length > 0 ? 'danger' : '' }, model: { value: t.goalData.amount, callback(e) { t.$set(t.goalData, 'amount', e); }, expression: 'goalData.amount' } })], 1)]; } }], null, !0) })], 1), o('div', { staticClass: 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [o('t-input-group', { attrs: { label: 'Goal Duration' } }, [o('t-select', { attrs: { placeholder: 'Select Duration', options: t.durationChoices, name: 'Duration' }, model: { value: t.goalData.duration, callback(e) { t.$set(t.goalData, 'duration', e); }, expression: 'goalData.duration' } })], 1), o('t-input-group', { attrs: { label: 'Goal Status' } }, [o('t-select', { attrs: { placeholder: 'Select Status', options: t.statusChoices, name: 'Status' }, model: { value: t.goalData.status, callback(e) { t.$set(t.goalData, 'status', e); }, expression: 'goalData.status' } })], 1)], 1), o('div', { staticClass: 'grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4' }, [o('t-input-group', { attrs: { label: 'Goal Desription (Optional)' } }, [o('t-textarea', { attrs: { rows: '10', cols: '60', placeholder: 'Describe your goal in some detail' }, model: { value: t.goalData.content, callback(e) { t.$set(t.goalData, 'content', e); }, expression: 'goalData.content' } })], 1)], 1), o('div', { staticClass: 'flex justify-between mt-6' }, [o('t-button', { attrs: { type: 'button', variant: 'error' }, on: { click(e) { return t.$emit('cancel'); } } }, [t._v(' Cancel ')]), o('t-button', { attrs: { type: 'submit' } }, [t._v(' Submit ')])], 1)])]; } }]) }); }; const d = []; const u = {
      name: 'AddUpdateGoalForm', props: { goal: { type: Object, required: !1 } }, data() { return { goalData: { content: '' }, durationChoices: ['1 Month', '3 Months', '4 Months', '6 Months', '9 Months', '1 Year'], statusChoices: ['In Progress', 'Completed', 'Not Yet Started'] }; }, mounted() { this.goal && (this.goalData = this.goal); }, methods: { submitForm() { this.goal ? this.$emit('updateGoal', this.goalData) : this.$emit('submit', this.goalData); }, handleContentUpdate(t) { this.goalData = { content: t }; } },
    }; const m = u; const c = o('2877'); const h = Object(c.a)(m, l, d, !1, null, null, null); const p = h.exports; const g = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'p-2 bg-gray-100 rounded' }, [o('p', { staticClass: 'truncate font-semibold text-center my-2' }, [t._v(` ${t._s(t.goal.title)} `)]), o('p', { staticClass: 'text-center text-gray-700 px-2 py-1 rounded my-2 font-medium' }, [t._v(' Amount required is '), o('span', { staticClass: 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800' }, [t._v(t._s(t.goal.amount))])]), o('p', { staticClass: 'w-1/2 mx-auto truncate text-center px-2 py-1 rounded text-xs my-2 font-medium', class: t.applyFilterClasses }, [t._v(` ${t._s(t.goal.status)} `)]), o('div', { staticClass: 'flex items-center justify-center my-2' }, [o('span', { staticClass: 'mx-1 cursor-pointer', on: { click(e) { return e.preventDefault(), t.editGoal.apply(null, arguments); } } }, [o('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
        },
      })])]), o('span', { staticClass: 'mx-1 cursor-pointer', on: { click(e) { return e.preventDefault(), t.deleteGoal.apply(null, arguments); } } }, [o('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
        },
      })])])])]);
    }; const x = []; const f = {
      name: 'GoalCard', props: { goal: { type: Object, required: !0 } }, computed: { applyFilterClasses() { const t = this.goal.status; return t === 'Completed' ? 'bg-green-400 text-white' : t === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-500 text-gray-200'; } }, methods: { submitForm() { this.$emit('submit', this.goalData); }, deleteGoal() { this.$emit('deleteGoal', this.goal._id); }, editGoal() { this.$emit('updateGoal', this.goal._id); } },
    }; const v = f; const w = Object(c.a)(v, g, x, !1, null, null, null); const k = w.exports; const b = o('511a'); const C = o('f5c7'); const y = o('6ae6'); const M = {
      name: 'GoalHome',
      components: {
        AddGoalForm: p, UpdateGoalForm: p, DesktopSidebarComponent: b.a, MobileMenuComponent: C.a, GoalCard: k, ConfirmModal: y.a,
      },
      data() {
        return {
          isAddGoalModalOpened: !1, showSidebar: !0, isConfirmModalOpened: !1, isUpdateModalOpened: !1, selectedGoal: null, deleteMessage: '',
        };
      },
      computed: Object(i.a)({}, Object(r.c)({ allGoals: n.c })),
      mounted() { this.getAllGoals(); },
      methods: Object(i.a)(Object(i.a)({}, Object(r.b)({
        addGoalAction: n.a, updateGoalAction: n.i, deleteGoalAction: n.b, getAllGoals: n.d,
      })), {}, {
        addGoal(t) {
          const e = {
            title: t.title, content: t.content, status: t.status, duration: t.duration, amount: t.amount,
          }; this.addGoalAction(e), this.isAddGoalModalOpened = !1, this.getAllGoals();
        },
        closeSidebar() { this.showSidebar = !this.showSidebar; },
        deleteGoal() { this.isConfirmModalOpened = !1, this.deleteGoalAction(this.selectedGoal._id), this.getAllGoals(); },
        openUpdateGoalModal(t) { this.isUpdateModalOpened = !0, this.selectedGoal = this.allGoals.find(((e) => e._id === t)); },
        updateGoal() { this.isUpdateModalOpened = !1, this.updateGoalAction(this.selectedGoal), this.getAllGoals(); },
        openConfirmDeleteModal(t) { this.isConfirmModalOpened = !0, this.selectedGoal = this.allGoals.find(((e) => e._id === t)), this.deleteMessage = 'Are you sure you want to delete Goal title "'.concat(this.selectedGoal.title, '" ?'); },
      }),
    }; const _ = M; const G = Object(c.a)(_, a, s, !1, null, null, null); e.default = G.exports;
  },
  '511a': function (t, e, o) {
    const a = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('nav', { staticClass: 'mt-5 flex-1 px-2 space-y-1' }, [o('router-link', { staticClass: 'bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'Home' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
      })]), t._v(' Dashboard ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ExpenseHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        },
      })]), t._v(' Expense ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'GoalsHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        },
      })]), t._v(' Goals ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'CalendarHome' }, href: '#' } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
      })]), t._v(' Calendar ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ExpenseBookHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        },
      })]), t._v(' Expense Book ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'ReportsHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
      })]), t._v(' Reports ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'IncomeHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      })]), t._v(' Income ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'BorrowHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
      })]), t._v(' Borrow ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'InvestmentHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
      })]), t._v(' Investment ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'PolicyHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
      })]), t._v(' Policy ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md', attrs: { to: { name: 'NotificationHome' } } }, [o('svg', {
        staticClass: 'mr-3 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
      })]), t._v(' Notifications ')])], 1);
    }; const s = []; const i = { name: 'DesktopMenu' }; const r = i; const n = o('2877'); const l = Object(n.a)(r, a, s, !1, null, null, null); e.a = l.exports;
  },
  '6ae6': function (t, e, o) {
    const a = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('form', { staticClass: 'font-medium text-gray-700', on: { submit(e) { return e.preventDefault(), t.submitForm.apply(null, arguments); } } }, [o('p', [t._v(` ${t._s(t.message)} `)]), o('div', { staticClass: 'flex justify-between mt-6' }, [o('t-button', { attrs: { type: 'button', variant: 'error' }, on: { click(e) { return t.$emit('cancel'); } } }, [t._v(' Cancel ')]), o('t-button', { attrs: { type: 'submit' } }, [t._v(' Submit ')])], 1)]); }; const s = []; const i = { name: 'ConfirmModal', props: { message: { type: String, required: !0 } }, methods: { submitForm() { this.$emit('confirm'); } } }; const r = i; const n = o('2877'); const l = Object(n.a)(r, a, s, !1, null, null, null); e.a = l.exports;
  },
  '7db0': function (t, e, o) {
    const a = o('23e7'); const s = o('b727').find; const i = o('44d2'); const r = 'find'; let n = !0; r in [] && Array(1)[r]((() => { n = !1; })), a({ target: 'Array', proto: !0, forced: n }, { find(t) { return s(this, t, arguments.length > 1 ? arguments[1] : void 0); } }), i(r);
  },
  f5c7(t, e, o) {
    const a = function () {
      const t = this; const e = t.$createElement; const o = t._self._c || e; return o('nav', { staticClass: 'mt-5 px-2 space-y-1' }, [o('a', { staticClass: 'bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { href: '#' } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
      })]), t._v(' Dashboard ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ExpenseHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        },
      })]), t._v(' Expense ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'GoalsHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
        },
      })]), t._v(' Goals ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'CalendarHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
      })]), t._v(' Expense Calendar ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ExpenseBookHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        },
      })]), t._v(' Expense Book ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'ReportsHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        },
      })]), t._v(' Reports ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'IncomeHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      })]), t._v(' Income ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'BorrowHome' } } }, [o('svg', {
        staticClass: 'w-6 h-6',
        attrs: {
          fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
      })]), t._v(' Borrow ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'InvestmentHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
      })]), t._v(' Investment ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'PolicyHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
      })]), t._v(' Policy ')]), o('router-link', { staticClass: 'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md', attrs: { to: { name: 'NotificationHome' } } }, [o('svg', {
        staticClass: 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': 'true',
        },
      }, [o('path', {
        attrs: {
          'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
      })]), t._v(' Notifications ')])], 1);
    }; const s = []; const i = { name: 'MobileMenu' }; const r = i; const n = o('2877'); const l = Object(n.a)(r, a, s, !1, null, null, null); e.a = l.exports;
  },
}]);
// # sourceMappingURL=chunk-7d8bcc92.8ae825bf.js.map

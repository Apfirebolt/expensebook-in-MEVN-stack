<template>
  <div class="bg-white shadow-sm rounded-md">
    <t-modal v-model="isAddExpenseModalOpened" header="Add Expense">
      <add-expense-form @submit="addExpense" @cancel="isAddExpenseModalOpened = false" />
    </t-modal>
    <t-modal v-model="isUpdateModalOpened" header="Update Expense">
      <update-expense-form
        :expense="selectedExpense"
        @updateExpense="updateExpense"
        @cancel="isUpdateModalOpened = false"
      />
    </t-modal>
    <t-modal v-model="isConfirmModalOpened" header="Confirm Delete">
      <confirm-modal
        :message="deleteMessage"
        @confirm="deleteExpense"
        @cancel="isConfirmModalOpened = false"
      />
    </t-modal>
    <div>
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full bg-green-600"
      >
        <div
          v-if="showSidebar"
          class="fixed inset-0 flex z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />

          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
            <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="closeSidebar"
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <mobile-menu-component />
            </div>
            <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-base font-medium text-white">Tom Cook</p>
                    <p class="text-sm font-medium text-indigo-200 group-hover:text-white">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </transition>

      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col min-h-0 bg-indigo-700">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <desktop-sidebar-component />
          </div>
          <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
            <a href="#" class="flex-shrink-0 w-full group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-white">Tom Cook</p>
                  <p class="text-xs font-medium text-indigo-200 group-hover:text-white">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="md:pl-64 flex flex-col flex-1">
        <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="showSidebar = true"
          >
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main class="flex-1">
          <div class="py-6">
            <div class="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
              <h1 class="text-2xl font-semibold text-gray-900">Expense</h1>
              <div>
                <t-button @click="exportExpenseAsCSV"> Export Expense Data </t-button>
                <t-button class="ml-2" @click="isAddExpenseModalOpened = true">
                  Add Expense
                </t-button>
              </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="my-2 border-4 border-dashed border-gray-200 px-2 py-4 rounded-lg">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
                  <div v-for="expense in allExpenses" :key="expense._id">
                    <expense-card
                      :expense="expense"
                      @deleteExpense="openConfirmDeleteModal"
                      @updateExpense="openUpdateExpenseModal"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-center my-3">
                <div class="class max-w-2xl">
                  <t-pagination
                    v-model="urlParams.page"
                    :total-items="allExpenses.length"
                    :per-page="urlParams.limit"
                    :limit="5"
                  />
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import * as expenseTypes from "../../store/modules/expense/expense-types";
import AddExpenseForm from "../../components/expense/add-update-form.vue";
import UpdateExpenseForm from "../../components/expense/add-update-form.vue";
import ExpenseCard from "../../components/expense/expense-card.vue";
import DesktopSidebarComponent from "../../components/common/sidebar.vue";
import MobileMenuComponent from "../../components/common/mobile-menu.vue";
import ConfirmModal from "../../components/common/confirm-modal.vue";

export default {
  name: "ExpenseHome",
  components: {
    AddExpenseForm,
    UpdateExpenseForm,
    DesktopSidebarComponent,
    MobileMenuComponent,
    ExpenseCard,
    ConfirmModal,
  },
  data() {
    return {
      isAddExpenseModalOpened: false,
      showSidebar: true,
      isConfirmModalOpened: false,
      isUpdateModalOpened: false,
      selectedExpense: null,
      deleteMessage: "",
      urlParams: {
        page: 1,
        limit: 20,
      },
      total: 0,
    };
  },
  computed: {
    ...mapGetters({
      allExpenses: expenseTypes.GET_ALL_EXPENSES,
    }),
  },
  mounted() {
    this.getAllExpenses();
  },
  methods: {
    ...mapActions({
      addExpenseAction: expenseTypes.CREATE_EXPENSE_ACTION,
      updateExpenseAction: expenseTypes.UPDATE_EXPENSE_ACTION,
      deleteExpenseAction: expenseTypes.DELETE_EXPENSE_ACTION,
      getAllExpenses: expenseTypes.GET_ALL_EXPENSES_ACTION,
      exportExpenseAsCSV: expenseTypes.EXPORT_EXPENSE_DATA,
    }),
    addExpense(payload) {
      const formattedPayload = {
        date: payload.date,
        expenseType: payload.expenseType,
        amount: payload.amount,
        note: payload.note,
      };
      this.addExpenseAction(formattedPayload);
      this.isAddExpenseModalOpened = false;
      this.getAllExpenses();
    },
    closeSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    deleteExpense() {
      this.isConfirmModalOpened = false;
      this.deleteExpenseAction(this.selectedExpense._id);
      this.getAllExpenses();
    },
    openUpdateExpenseModal(id) {
      this.isUpdateModalOpened = true;
      this.selectedExpense = this.allExpenses.find((item) => item._id === id);
    },
    updateExpense() {
      this.isUpdateModalOpened = false;
      this.updateExpenseAction(this.selectedExpense);
      this.getAllExpenses();
    },
    openConfirmDeleteModal(id) {
      this.isConfirmModalOpened = true;
      this.selectedExpense = this.allExpenses.find((item) => item._id === id);
      this.deleteMessage = `Are you sure you want to delete expense of ${this.selectedExpense.amount} ?`;
    },
  },
};
</script>

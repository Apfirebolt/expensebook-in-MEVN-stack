<template>
  <div class="bg-white shadow-sm rounded-md">
    <t-modal v-model="isAddGoalModalOpened" header="Add Goal">
      <add-goal-form @submit="addGoal" @cancel="isAddGoalModalOpened = false" />
    </t-modal>
    <t-modal v-model="isUpdateModalOpened" header="Update Goal">
      <update-goal-form :goal="selectedGoal" @updateGoal="updateGoal" @cancel="isUpdateModalOpened = false" />
    </t-modal>
    <t-modal v-model="isConfirmModalOpened" header="Confirm Delete">
      <confirm-modal :message="deleteMessage" @confirm="deleteGoal" @cancel="isConfirmModalOpened = false" />
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
                >
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
                    >
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
              >
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
                  >
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
              <h1 class="text-2xl font-semibold text-gray-900">
                Goal
              </h1>
              <t-button @click="isAddGoalModalOpened = true">
                Add Goal
              </t-button>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="my-2 border-4 border-dashed border-gray-200 px-2 py-4 rounded-lg">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
                  <div v-for="goal in allGoals" :key="goal._id">
                    <goal-card :goal="goal" @deleteGoal="openConfirmDeleteModal" @updateGoal="openUpdateGoalModal" />
                  </div>
                </div>
              </div>
              <div class="flex justify-center my-3">
                <div class="class max-w-2xl">
                  <t-pagination
                    v-model="urlParams.page"
                    :total-items="goalCount"
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
import { mapActions, mapGetters } from 'vuex';
import * as goalTypes from '../../store/modules/goal/goal-types';
import AddGoalForm from '../../components/goal/add-update-form.vue';
import UpdateGoalForm from '../../components/goal/add-update-form.vue';
import GoalCard from '../../components/goal/goal-card.vue';
import DesktopSidebarComponent from '../../components/common/sidebar.vue';
import MobileMenuComponent from '../../components/common/mobile-menu.vue';
import ConfirmModal from '../../components/common/confirm-modal.vue';

export default {
  name: 'GoalHome',
  components: {
    AddGoalForm,
    UpdateGoalForm,
    DesktopSidebarComponent,
    MobileMenuComponent,
    GoalCard,
    ConfirmModal,
  },
  data() {
    return {
      isAddGoalModalOpened: false,
      showSidebar: true,
      isConfirmModalOpened: false,
      isUpdateModalOpened: false,
      selectedGoal: null,
      deleteMessage: '',
      urlParams: {
        page: 1,
        limit: 5,
      },
    };
  },
  computed: {
    ...mapGetters({
      allGoals: goalTypes.GET_ALL_GOALS,
      goalCount: goalTypes.GET_GOAL_COUNT,
    }),
  },
  watch: {
    $route() {
      this.getAllGoals(this.urlParams);
    },
    urlParams: {
      handler: 'updateRoute',
      deep: true,
    },
  },
  mounted() {
    this.getAllGoals(this.urlParams);
  },
  methods: {
    ...mapActions({
      addGoalAction: goalTypes.CREATE_GOAL_ACTION,
      updateGoalAction: goalTypes.UPDATE_GOAL_ACTION,
      deleteGoalAction: goalTypes.DELETE_GOAL_ACTION,
      getAllGoals: goalTypes.GET_ALL_GOALS_ACTION,
    }),
    async updateRoute() {
      try {
        await this.$router.push({ name: 'GoalsHome', query: this.urlParams });
      } catch (navigationError) {
        // Catch and ignore navigation errors caused through multiple params changed
      }
    },
    addGoal(payload) {
      const formattedPayload = {
        title: payload.title,
        content: payload.content,
        status: payload.status,
        duration: payload.duration,
        amount: payload.amount,
      };
      this.addGoalAction(formattedPayload);
      this.isAddGoalModalOpened = false;
      this.getAllGoals();
    },
    closeSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    deleteGoal() {
      this.isConfirmModalOpened = false;
      this.deleteGoalAction(this.selectedGoal._id);
      this.getAllGoals();
    },
    openUpdateGoalModal(id) {
      this.isUpdateModalOpened = true;
      this.selectedGoal = this.allGoals.find((item) => item._id === id);
    },
    updateGoal() {
      this.isUpdateModalOpened = false;
      this.updateGoalAction(this.selectedGoal);
      this.getAllGoals();
    },
    openConfirmDeleteModal(id) {
      this.isConfirmModalOpened = true;
      this.selectedGoal = this.allGoals.find((item) => item._id === id);
      this.deleteMessage = `Are you sure you want to delete Goal title "${this.selectedGoal.title}" ?`;
    },
  },
};
</script>

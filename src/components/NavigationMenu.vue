<script setup lang="ts">
import DashboardIcon from '@/components/icons/DashboardIcon.vue';
import ClipboardTickIcon from '@/components/icons/ClipboardTickIcon.vue';
import CalendarTickIcon from '@/components/icons/CalendarTickIcon.vue';
import BagTickIcon from '@/components/icons/BagTickIcon.vue';
import SmsIcon from '@/components/icons/SmsIcon.vue';
import WalletEmptyIcon from '@/components/icons/WalletEmptyIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import NavigationMenuItem from '@/components//NavigationMenuItem.vue';
import HelpIcon from '@/components/icons/HelpIcon.vue';

import type { MenuItem } from '@/types/navigation-menu';

const menuItems: MenuItem[] = [
    { toRoute: { name: 'dashboard_home' }, text: 'Dashboard', icon: DashboardIcon },
    { toRoute: { name: 'lab_test' }, text: 'Lab Test', icon: ClipboardTickIcon },
    { toRoute: { name: 'appointment' }, text: 'Appointment', icon: CalendarTickIcon },
    { toRoute: { name: 'medicine_order' }, text: 'Medicine Order', icon: BagTickIcon },
    { toRoute: { name: 'message' }, text: 'Message', icon: SmsIcon },
    { toRoute: { name: 'payment' }, text: 'Payment', icon: WalletEmptyIcon },
    { toRoute: { name: 'settings' }, text: 'Settings', icon: SettingsIcon },
]
</script>

<template>
    <nav class="navigation">
        <ul class="menu">
            <NavigationMenuItem class="menu-list-item" v-for="(menuItem, index) in menuItems" :key="index"
                :to="menuItem.toRoute">
                <span class="menu-item-text">{{ menuItem.text }}</span>
                <template #icon v-if="menuItem.icon">
                    <component :is="menuItem.icon" />
                </template>
            </NavigationMenuItem>
        </ul>
        <ul class="menu-help">
            <NavigationMenuItem class="menu-list-item" :to="{ name: 'help' }">
                <span class="menu-item-text">Help</span>
                <template #icon>
                    <component :is="HelpIcon" />
                </template>
            </NavigationMenuItem>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navigation {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu {
        display: flex;
        flex-direction: column;
        row-gap: 33.5px;
    }
}

.menu-help {
    margin-top: auto;
}

:deep(a) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7.5px 15px;
    border-left: 3px solid transparent;
    color: $black-100-color;
    font-size: 16px;
    font-weight: 400;

    @media (min-width: $lg-breakpoint) {
        padding-left: 38px;
        padding-right: 0;
        justify-content: start;
    }

    &:hover,
    &.router-link-exact-active {
        border-left: 3px solid $primary-color;
        color: $primary-color;
    }

    .menu-item-text {
        display: none;

        @media (min-width: $lg-breakpoint) {
            display: block;
        }
    }

    .icon {
        @media (min-width: $lg-breakpoint) {
            margin-right: 15px;
        }
    }
}
</style>
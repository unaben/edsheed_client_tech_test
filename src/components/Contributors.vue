<script setup lang="ts">
import { ref } from 'vue';
import { contributors } from '../data/contributors';
// const count = ref(0);

const contributorsData = contributors.items;
console.log('data', contributorsData);
</script>

<template>
  <div class="container">
    <table class="table table-bordered rounded">
      <thead class="table-dark">
        <tr>
          <th scope="col">Authors</th>
          <th scope="col">Total Contributor</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Clans</th>
        </tr>
      </thead>
      <tbody v-for="contributor in contributorsData">
        <tr>
          <th scope="row">{{ contributor.author }}</th>
          <td>{{ contributor.total_contributions }}</td>
          <td>
            {{
              new Date(
                contributor.contribution_range.start
              ).toLocaleDateString()
            }}
          </td>
          <td>
            {{
              new Date(contributor.contribution_range.end).toLocaleDateString()
            }}
          </td>
          <td>{{ contributor.clans_contributed_to.toString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>

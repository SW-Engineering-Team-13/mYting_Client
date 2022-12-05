<template>
  <v-container>
    <v-row
      justify="center"
    >
      <v-col
        cols="6"
      >
        <v-img
          contain
          src="@/assets/FindGroupImage.png"
        />
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        cols="6"
      >
        <v-card>
          <v-toolbar dark
          color="indigo darken-1"
        >
          <v-toolbar-title>스터디검색</v-toolbar-title>
          <v-autocomplete
            v-model="findStudy"
            :items="items"
            v-model:search-input="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="검색어를 입력하세요."
            solo-inverted
          />
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </v-toolbar>

          <v-container fluid>
            <v-data-iterator
              :items="items"
            >
              <v-row>
                <v-col
                  cols="6"
                  v-for="item in items"
                  :key = "item.title"
                >
                  <v-card>
                    <v-card-title style="font-size: 18px; font-weight: bold">
                      <v-row
                        justify="space-between"
                      >
                        <v-col cols="3">
                        {{item.title}}</v-col>
                        <v-col 
                          color="blue"
                          cols="3"
                        >
                          <v-btn color="blue">참가하기</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                    <v-divider />
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>{{item.intro}}</v-list-item-title>
                          <v-list-item-subtitle>{{item.rules}}</v-list-item-subtitle>
                          <v-row style="margin-top:5px;">
                            <v-col
                              cols="3"
                              v-for="part in item.participants"
                            >
                              <v-chip color="pink">{{part}}</v-chip>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-data-iterator>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Nav />
</template>

<script>
import Nav from '@/views/Study/StudyNav.vue';

export default {
  components: {
    Nav
  },
  data() {
    return {
      Keys: [
        'Title',
        'Introduce',
        'Rules',
        'Capacity',
        'Participants'
      ],
      items: [
        {
          title: '소프트웨어 공학 스터디',
          intro: '너무 어려워~ 프로젝트~',
          rules: '기간 잘 지키기',
          capacity: 4,
          participants: ['INTJ', 'INFP']
        },
        {
          title: '토익 스터디',
          intro: '졸업요건 맞추기~ 650점~',
          rules: '약속 잘 지키기',
          capacity: 4,
          participants: ['ISTP', 'ENTJ', 'INTP']
        },
        {
          title: '기말고사 모각공',
          intro: '같이 공부해요~',
          rules: '작심삼일 안하기',
          capacity: 4,
          participants: ['INTJ']
        },
      ]
    }
  }
}
</script>